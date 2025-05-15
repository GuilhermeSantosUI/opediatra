import { NavMain } from '@/views/components/nav-main';
import { NavSecondary } from '@/views/components/nav-secondary';
import { NavUser } from '@/views/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/views/components/ui/sidebar';
import { DoorOpen } from '@phosphor-icons/react';
import {
  Calendar,
  Clock,
  Database,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings,
  Users,
} from 'lucide-react';
import * as React from 'react';

const data = {
  user: {
    name: 'Guilherme Santos',
    email: 'guilherme@obixy.com.br',
    avatar: 'https://avatars.githubusercontent.com/u/69989490?v=4',
  },

  navMain: [
    {
      title: 'Reuniões',
      url: '/reunioes',
      icon: Calendar,
      isActive: false,
    },
    {
      title: 'Configurações',
      url: '/configuracoes',
      icon: Settings,
      isActive: false,
    },
    {
      title: 'Reservas',
      url: '/reservas',
      icon: Clock,
      isActive: false,
    },
    {
      title: 'Cadastro',
      url: '#',
      icon: Database,
      isActive: true,
      items: [
        {
          title: 'Salas',
          url: '#',
          icon: Users,
        },
        {
          title: 'Administradores',
          url: '/cadastro/funcao',
          icon: Settings,
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Ajuda',
      url: '#',
      icon: LifeBuoy,
    },
    {
      title: 'Feedback',
      url: '#',
      icon: Send,
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
    {
      name: 'Sales & Marketing',
      url: '#',
      icon: PieChart,
    },
    {
      name: 'Travel',
      url: '#',
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <DoorOpen className="size-5 text-white" weight="duotone" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Reserva</span>
                  <span className="truncate text-xs">
                    Sistema de agendamento
                  </span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
