import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/views/components/ui/form';
import { Textarea, TextareaProps } from '@/views/components/ui/textarea';

interface TextareaFormItemProps extends TextareaProps {
  control: any;
  name: string;
  label: string;
  placeholder: string;
  description: string;
}

export function TextareaFormItem({
  control,
  name,
  label,
  placeholder,
  description,
  ...props
}: TextareaFormItemProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label}
            {props.required && <span className="!text-red-500">*</span>}
          </FormLabel>
          <FormControl>
            <Textarea
              className="min-h-[100px] max-h-[200px] rounded-none"
              placeholder={placeholder}
              {...field}
              {...props}
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
