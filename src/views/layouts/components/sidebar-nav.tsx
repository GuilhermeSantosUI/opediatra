import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { buttonVariants } from '@/views/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/views/components/ui/select';

import { cn } from '@/app/utils';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
    icon: JSX.Element;
  }[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [val, setVal] = useState(pathname ?? '/settings');

  const handleSelect = (e: string) => {
    setVal(e);
    navigate(e);
  };

  return (
    <>
      <div className="p-1 md:hidden">
        <Select value={val} onValueChange={handleSelect}>
          <SelectTrigger className="h-12 sm:w-48">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            {items.map((item) => (
              <SelectItem key={item.href} value={item.href}>
                <div className="flex gap-x-4 px-2 py-1">
                  <span className="scale-125">{item.icon}</span>
                  <span className="text-md">{item.title}</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="hidden w-full overflow-x-auto bg-background px-1 py-2 md:block">
        <nav
          className={cn(
            'flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1',
            className
          )}
          {...props}
        >
          {items.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={cn(
                buttonVariants({ variant: 'ghost' }),
                pathname === item.href
                  ? 'bg-muted hover:bg-muted'
                  : 'hover:bg-transparent hover:underline',
                'justify-start aria-[current=page]:bg-muted transition-all duration-300 transform active:scale-95'
              )}
            >
              <span className="mr-2">{item.icon}</span>
              {item.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
}
