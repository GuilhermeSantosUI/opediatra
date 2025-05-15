import { ReactNode, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

import { localStorageKeys } from '@/app/config';

type PermissionProps = {
  permission: string;
  children: ReactNode;
};

export function Permission({ permission, children }: PermissionProps) {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    async function loadPermissions() {
      try {
        const token = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

        if (token) {
          const { sub } = jwtDecode(token);

          const decodedToken = JSON.parse(sub as string);

          const userPermissions = decodedToken?.permissions;

          const hasRequiredPermission = userPermissions?.some(
            (role: string) => permission?.split(',').includes(role),
          );

          setHasPermission(hasRequiredPermission);
        }
      } catch (error) {
        console.error('Error loading permissions:', error);
        setHasPermission(false);
      }
    }

    loadPermissions();
  }, [permission]);

  return <>{hasPermission && children}</>;
}
