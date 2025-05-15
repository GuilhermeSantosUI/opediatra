import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/views/components/ui/form';
import { RichTextEditor } from './editor-content';

interface TextEditorFormItemProps {
  control: any;
  name: string;
  label: string;
  description: string;
  required?: boolean;
}

export function TextEditorFormItem({
  control,
  name,
  label,
  description,
  required,
}: TextEditorFormItemProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label}
            {required && <span className="!text-red-500">*</span>}
          </FormLabel>
          <FormControl>
            <RichTextEditor
              description={field.value}
              onChange={field.onChange}
              required={required}
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
