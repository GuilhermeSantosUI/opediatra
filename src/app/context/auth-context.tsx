import { localStorageKeys } from '@/app/config';
import { api } from '@/app/services';
import { jwtDecode } from 'jwt-decode';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { toast } from 'sonner';

type AuthState = {
  token: string;
};

type AuthContextValue = {
  signedIn: boolean;
  authenticate(token: string): void;
  signOut(): void;
};

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  const [, setAuthState] = useState<AuthState>(() => {
    const token = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;

      setIsSignedIn(true);
      return { token };
    }

    return {} as AuthState;
  });

  const authenticate = useCallback((token: string) => {
    try {
      localStorage.setItem(localStorageKeys.ACCESS_TOKEN, token);

      api.defaults.headers.Authorization = `Bearer ${token}`;

      setIsSignedIn(true);
      setAuthState({ token });
    } catch (error) {
      toast.error('Erro ao autenticar usuário.');
      console.error(error);
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);

    setIsSignedIn(false);

    setAuthState({} as AuthState);

    api.defaults.headers.Authorization = '';
    api.defaults.headers['Cache-Control'] = 'no-cache';
  }, []);

  useEffect(() => {
    const token = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    if (!token) {
      signOut();
      return;
    }

    const { exp } = jwtDecode<{ exp: number }>(token);

    const currentTime = Math.floor(Date.now() / 1000);

    const timeUntilExpiration = (exp - currentTime) * 1000;

    if (timeUntilExpiration <= 0) {
      window.location.href = import.meta.env.VITE_API_REDIRECT;
      signOut();
    } else {
      const timeout = setTimeout(() => {
        signOut();
      }, timeUntilExpiration);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [signOut]);

  return (
    <AuthContext.Provider
      value={{
        signedIn: isSignedIn,
        authenticate,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
