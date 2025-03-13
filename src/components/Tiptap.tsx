'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Toolbar from './toolbar/Toolbar';

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
    editable: true,
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto my-10 border border-gray-800 rounded-lg overflow-hidden bg-white">
      <Toolbar editor={editor} />
      <div className="p-4 text-gray-800">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Tiptap;
