/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import {
  ArrowFatLineDown,
  List,
  ListNumbers,
  Minus,
  TextBolder,
  TextItalic,
  TextStrikethrough,
} from '@phosphor-icons/react';

import { Separator } from '@/views/components/ui/separator';
import { Toggle } from '@/views/components/ui/toggle';

import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import { EditorContent, useEditor, type Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useEffect, useState } from 'react';

export function RichTextEditor({
  description,
  onChange,
  required,
}: {
  description: string;
  onChange: (richText: string) => void;
  required?: boolean;
}) {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          'min-h-[80px] max-h-[180px] w-full rounded-br-none rounded-bl-none border border-input bg-transparent px-3 py-2 border-b-0 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-auto',
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure({ HTMLAttributes: { types: [ListItem.name] } }),
      StarterKit.configure({
        heading: {
          HTMLAttributes: {
            class: 'text-xl font-bold',
            levels: [2],
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: 'list-decimal pl-4',
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc pl-4',
          },
        },
      }),
    ],
  });

  const [controll, setControll] = useState(false);

  useEffect(() => {
    if (!controll && description !== '') {
      editor?.commands.setContent(description);
      setControll(true);
    }
  }, [controll, description, editor]);

  return (
    <div className="tiptap shadow-sm">
      <EditorContent editor={editor} required={required} />
      {editor ? <DefaultEditorContent editor={editor} /> : null}
    </div>
  );
}

function DefaultEditorContent({ editor }: { editor: Editor }) {
  return (
    <div className="border border-input bg-transparent p-1 flex flex-row items-center gap-1">
      <Toggle
        size="sm"
        pressed={editor.isActive('bold')}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}>
        <TextBolder className="h-4 w-4" />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive('italic')}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}>
        <TextItalic className="h-4 w-4" />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive('strike')}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}>
        <TextStrikethrough className="h-4 w-4" />
      </Toggle>

      <Separator orientation="vertical" className="w-[1px] h-8" />

      <Toggle
        size="sm"
        pressed={editor.isActive('bulletList')}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}>
        <List className="h-4 w-4" />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive('orderedList')}
        onPressedChange={() =>
          editor.chain().focus().toggleOrderedList().run()
        }>
        <ListNumbers className="h-4 w-4" />
      </Toggle>

      <Separator orientation="vertical" className="w-[1px] h-8" />

      <Toggle
        size="sm"
        pressed={editor.isActive('horizontalRule')}
        onPressedChange={() =>
          editor.chain().focus().setHorizontalRule().run()
        }>
        <Minus className="h-4 w-4" />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive('hardBreak')}
        onPressedChange={() => editor.chain().focus().setHardBreak().run()}>
        <ArrowFatLineDown className="h-4 w-4" />
      </Toggle>
    </div>
  );
}
