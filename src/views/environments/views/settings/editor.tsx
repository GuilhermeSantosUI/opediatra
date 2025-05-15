import { EditorWriter } from '@/views/components/editor';

export function Editor() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
      <div className="flex flex-col gap-4 pb-4">
        <h1>Editor</h1>
      </div>

      <EditorWriter />
    </div>
  );
}
