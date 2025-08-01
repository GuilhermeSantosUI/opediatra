import { format } from 'date-fns';

import { Button } from '@/views/components/ui/button';
import { Calendar } from '@/views/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/views/components/ui/popover';

import { cn } from '@/app/utils';

import { useDisclosure } from '@/app/context/use-disclosure';
import type { ButtonHTMLAttributes } from 'react';

// ================================== //

type TProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onSelect' | 'value'
> & {
  onSelect: (value: Date | undefined) => void;
  value?: Date | undefined;
  placeholder: string;
  labelVariant?: 'P' | 'PP' | 'PPP';
};

function SingleDayPicker({
  id,
  onSelect,
  className,
  placeholder,
  labelVariant = 'PPP',
  value,
  ...props
}: TProps) {
  const { isOpen, onClose, onToggle } = useDisclosure();

  function handleSelect(date: Date | undefined) {
    onSelect(date);
    onClose();
  }

  return (
    <Popover open={isOpen} onOpenChange={onToggle} modal>
      <PopoverTrigger asChild>
        <Button
          id={id}
          variant="outline"
          className={cn(
            'group relative h-9 w-full justify-start whitespace-nowrap px-3 py-2 font-normal hover:bg-inherit',
            className,
          )}
          {...props}>
          {value && <span>{format(value, labelVariant)}</span>}
          {!value && (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent align="center" className="w-fit p-0 bg-white">
        <Calendar
          mode="single"
          selected={value}
          onSelect={handleSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

// ================================== //

export { SingleDayPicker };
