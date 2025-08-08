import React from 'react';
import type { Active } from '@dnd-kit/core';
import type { FormElement } from '../../types/form';
import { Heading1, Mail, Pilcrow, Type } from 'lucide-react';
import FormElementDisplay from '../Canvas/FormElementDisplay';

interface DragOverlayContentProps {
  activeItem: Active;
}

const ToolboxButtonOverlay = ({ label, icon }: { label: string; icon: React.ReactNode }) => (
  <div className="flex flex-col items-center justify-center p-3 bg-white border border-gray-300 rounded-lg shadow-lg text-sm">
    {icon}
    <span className="mt-1">{label}</span>
  </div>
);

const DragOverlayContent = ({ activeItem }: DragOverlayContentProps) => {
  const isToolboxElement = activeItem.data.current?.isToolboxElement;

  if (isToolboxElement) {
    const type = activeItem.id as string;
    switch (type) {
      case 'h1': return <ToolboxButtonOverlay label="Heading" icon={<Heading1 size={20} />} />;
      case 'p': return <ToolboxButtonOverlay label="Paragraph" icon={<Pilcrow size={20} />} />;
      case 'text': return <ToolboxButtonOverlay label="Text Input" icon={<Type size={20} />} />;
      case 'email': return <ToolboxButtonOverlay label="Email Input" icon={<Mail size={20} />} />;
      default: return <div>Unknown Toolbox Item</div>;
    }
  }

  const isCanvasElement = activeItem.data.current?.isCanvasElement;
  if (isCanvasElement) {
    const element = activeItem.data.current?.element as FormElement;
    return (
      <div className="bg-white p-2 rounded-lg shadow-lg">
        <FormElementDisplay element={element} />
      </div>
    );
  }

  return null;
};

export default DragOverlayContent;