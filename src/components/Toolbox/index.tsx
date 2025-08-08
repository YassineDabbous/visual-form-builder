import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import {
  Type, Mail, Heading1, Pilcrow, Hash, Globe, Phone, KeyRound, Star, MessageSquareQuote,
  List, ListOrdered, Minus, Code2, Calendar, Clock, Image, ChevronsUpDown, CheckSquare2
} from 'lucide-react';

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
      <div className="space-y-6">
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Content</h3>
          <div className="grid grid-cols-2 gap-2">
            <DraggableToolboxButton type="h1" label="Heading" icon={<Heading1 size={20} />} />
            <DraggableToolboxButton type="p" label="Paragraph" icon={<Pilcrow size={20} />} />
            <DraggableToolboxButton type="hr" label="Divider" icon={<Minus size={20} />} />
            <DraggableToolboxButton type="blockquote" label="Quote" icon={<MessageSquareQuote size={20} />} />
            <DraggableToolboxButton type="ul" label="List" icon={<List size={20} />} />
            <DraggableToolboxButton type="ol" label="Ordered List" icon={<ListOrdered size={20} />} />
            <DraggableToolboxButton type="code" label="Code Block" icon={<Code2 size={20} />} />
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Inputs</h3>
          <div className="grid grid-cols-2 gap-2">
            <DraggableToolboxButton type="text" label="Text" icon={<Type size={20} />} />
            <DraggableToolboxButton type="textarea" label="Text Area" icon={<Type size={20} />} />
            <DraggableToolboxButton type="email" label="Email" icon={<Mail size={20} />} />
            <DraggableToolboxButton type="password" label="Password" icon={<KeyRound size={20} />} />
            <DraggableToolboxButton type="number" label="Number" icon={<Hash size={20} />} />
            <DraggableToolboxButton type="url" label="URL" icon={<Globe size={20} />} />
            <DraggableToolboxButton type="tel" label="Telephone" icon={<Phone size={20} />} />
            <DraggableToolboxButton type="date" label="Date" icon={<Calendar size={20} />} />
            <DraggableToolboxButton type="time" label="Time" icon={<Clock size={20} />} />
            <DraggableToolboxButton type="datetime" label="Date & Time" icon={<Calendar size={20} />} />
          </div>
        </div>
        
        <div>
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Choice Inputs</h3>
          <div className="grid grid-cols-2 gap-2">
            <DraggableToolboxButton type="select" label="Select Box" icon={<ChevronsUpDown size={20} />} />
            <DraggableToolboxButton type="choice" label="Choice" icon={<CheckSquare2 size={20} />} />
            <DraggableToolboxButton type="pictureChoice" label="Picture Choice" icon={<Image size={20} />} />
            <DraggableToolboxButton type="rating" label="Rating" icon={<Star size={20} />} />
            <DraggableToolboxButton type="opinionScale" label="Opinion Scale" icon={<ChevronsUpDown size={20} />} />
          </div>
        </div>
      </div>
    </aside>
  );
};

const ToolboxButton = ({ label, icon }: { label: string; icon: React.ReactNode; }) => (
  <div className="flex flex-col items-center justify-center p-3 bg-white border border-gray-300 rounded-lg cursor-grab text-sm text-center text-gray-700">
    {icon}
    <span className="mt-1">{label}</span>
  </div>
);

export default Toolbox;