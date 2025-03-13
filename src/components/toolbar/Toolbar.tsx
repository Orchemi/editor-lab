import { Editor } from '@tiptap/react';
import BoldButton from './BoldButton';

interface ToolbarProps {
  editor: Editor;
}

const Toolbar = ({ editor }: ToolbarProps) => {
  return (
    <div className="toolbar flex gap-2 p-2 border-b border-gray-800">
      <BoldButton editor={editor} />
    </div>
  );
};

export default Toolbar;
