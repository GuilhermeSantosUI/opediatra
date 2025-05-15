import { Link, LinkProps } from 'react-router-dom';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/views/components/ui/tooltip';

import { Button } from '@/views/components/ui/button';
import { IconProps } from '@phosphor-icons/react';

interface ButtonIconTooltipProps extends LinkProps {
  icon: React.ComponentType<IconProps>;
  text: string;
}

export function ButtonIconTooltip({
  icon: Icon,
  text,
  ...rest
}: ButtonIconTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="icon"
            className="w-8 h-8 shadow-none"
            style={{ border: '1px solid #eaeaea' }}
            variant="outline"
            asChild>
            <Link {...rest}>{Icon && <Icon className="w-5 h-5" />}</Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
