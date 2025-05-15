import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/views/components/ui/form';
import { CheckboxProps } from '@radix-ui/react-checkbox';
import { Checkbox } from './checkbox';

interface CheckboxFormItemProps extends CheckboxProps {
  control: any;
  name: string;
  label: string;
  description: string;
}

export function CheckboxFormItem({
  control,
  name,
  label,
  description,
  ...props
}: CheckboxFormItemProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 border p-4">
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={() => field.onChange(!field.value)}
              {...props}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>{label}</FormLabel>
            <FormDescription>{description}</FormDescription>
          </div>
        </FormItem>
      )}
    />
  );
}
