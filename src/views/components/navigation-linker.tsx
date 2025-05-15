import { IconProps } from '@phosphor-icons/react';
import { LinkProps, NavLink } from 'react-router-dom';

type NavigationLinkerProps = LinkProps & {
  icon?: React.ElementType<IconProps>;
  title: string;
};

export function NavigationLinker({
  icon: Icon,
  title,
  ...props
}: NavigationLinkerProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        `text-sm h-full border-b-2 flex items-center justify-center ${
          isActive
            ? 'border-primary dark:border-secondary'
            : 'border-transparent'
        }`
      }
      {...props}>
      <span className="px-2 py-1 mx-1 flex items-center gap-2 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-gray-900 rounded-md text-nowrap">
        {Icon && <Icon />}
        {title}
      </span>
    </NavLink>
  );
}
