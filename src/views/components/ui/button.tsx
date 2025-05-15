import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/app/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-gray-300',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-gray-50 shadow hover:bg-primary/90 dark:bg-gray-50 dark:!text-primary dark:hover:bg-gray-50/90',
        destructive:
          'bg-red-500 text-gray-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-gray-50 dark:hover:bg-red-900/90',
        outline:
          'border border-gray-200 bg-gray-50 shadow-sm hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50',
        secondary:
          'bg-gray-50 text-gray-900 shadow-sm hover:bg-gray-300/60 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/60',
        ghost:
          'hover:bg-gray-100 hover:text-gray-900 dark:text-gray-50 dark:hover:bg-gray-800/50',
        // link: 'text-gray-900 underline-offset-4 hover:underline dark:text-gray-50',
        link: 'hover:bg-white/10 underline-offset-4 hover:underline dark:text-gray-50 dark:hover:bg-gray-600/50',
        disable:
          'bg-red-900 text-gray-50 shadow-sm hover:bg-red-900/90 dark:bg-red-500 dark:text-gray-50 dark:hover:bg-red-500/90',
        search:
          'bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-400 hover:text-blue-500 dark:hover:text-gray-50',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md p-6 text-base',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
