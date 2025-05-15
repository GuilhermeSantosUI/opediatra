import { Lock, User } from '@phosphor-icons/react';
import { Separator } from 'react-aria-components';
import { Outlet } from 'react-router-dom';

import { SidebarNav } from './components/sidebar-nav';

const sidebarNavItems = [
  {
    title: 'Perfil',
    icon: <User size={18} />,
    href: '/configuracoes/perfil',
  },

  {
    title: 'Segurança',
    icon: <Lock size={18} />,
    href: '/configuracoes/seguranca',
  },
];

export function ProfileLayout() {
  return (
    <div>
      <div className="flex items-end justify-between px-4 py-6 border-b">
        <h1 className="text-3xl font-semibold">Configurações</h1>
        <span className="text-sm text-muted-foreground">
          {new Date().getDate()}
        </span>
      </div>

      <Separator className="h-[10px] bg-[#f5f5f5] mb-8" />

      <div className="animate-slidein500 opacity-0 flex flex-1 flex-col space-y-8 overflow-auto lg:flex-row lg:space-x-12 lg:space-y-0">
        <aside className="sticky top-0 lg:w-1/5">
          <SidebarNav items={sidebarNavItems} />
        </aside>
        <div className="w-full p-1 pr-4 lg:max-w-xl">
          <div className="pb-16">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
