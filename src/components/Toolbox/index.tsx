import { useDraggable } from '@dnd-kit/core';
import { Type, Mail, Heading1, Pilcrow } from 'lucide-react';

const DraggableToolboxButton = ({ type, label, icon }: { type: string; label: string; icon: React.ReactNode }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: type,
    data: {
      isToolboxElement: true,
    },
  });

  return (
    <div ref={setNodeRef} {...listeners} {...attributes}>
      <ToolboxButton label={label} icon={icon} />
    </div>
  );
};

const Toolbox = () => {
  return (
    <aside className="w-64 bg-gray-100 p-4 border-r overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Toolbox</h2>
      <div className="grid grid-cols-2 gap-2">
        <DraggableToolboxButton type="h1" label="Heading" icon={<Heading1 size={20} />} />
        <DraggableToolboxButton type="p" label="Paragraph" icon={<Pilcrow size={20} />} />
        <DraggableToolboxButton type="text" label="Text Input" icon={<Type size={20} />} />
        <DraggableToolboxButton type="email" label="Email Input" icon={<Mail size={20} />} />
      </div>
    </aside>
  );
};

const ToolboxButton = ({ label, icon }: { label: string; icon: React.ReactNode; }) => (
  <div className="flex flex-col items-center justify-center p-3 bg-white border border-gray-300 rounded-lg cursor-grab text-sm">
    {icon}
    <span className="mt-1">{label}</span>
  </div>
);

export default Toolbox;