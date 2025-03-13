import { Editor } from '@tiptap/react';
import { Bold } from 'lucide-react';

interface BoldButtonProps {
  editor: Editor;
}

const BoldButton = ({ editor }: BoldButtonProps) => {
  return (
    <button
      onClick={() => editor.chain().focus().toggleBold().run()}
      className={`p-2 rounded-md hover:bg-slate-100 transition-colors ${
        editor.isActive('bold') ? 'bg-gray-100 text-gray-800' : 'text-gray-500'
      }`}
      title="Bold"
    >
      <Bold size={18} />
    </button>
  );
};

export default BoldButton;
