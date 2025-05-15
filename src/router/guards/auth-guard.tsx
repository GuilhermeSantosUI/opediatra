import { useAuth } from '@/app/context';
import { Navigate, Outlet } from 'react-router-dom';

type AuthGuardProps = {
  isPrivate: boolean;
};

export function AuthGuard({ isPrivate }: AuthGuardProps) {
  const { signedIn } = useAuth();

  if (!signedIn && isPrivate) {
    return <Navigate to="/login" />;
  }

  if (signedIn && !isPrivate) {
    return <Navigate to="/painel/dashboard" replace />;
  }

  return <Outlet />;
}
