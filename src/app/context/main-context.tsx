import { ReactNode } from 'react';

import { AuthProvider } from './auth-context';

type MainContextProps = {
  children: ReactNode;
};

export function MainContext({ children }: MainContextProps) {
  return <AuthProvider>{children}</AuthProvider>;
}
