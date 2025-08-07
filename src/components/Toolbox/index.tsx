import React from 'react';
import useFormStore from '../../store/formStore';
import type { FormElement } from '../../types/form';
import { Type, Mail, Heading1, Pilcrow } from 'lucide-react';

const generateElement = (type: string): FormElement => {
  const baseElement = { id: self.crypto.randomUUID(), type };

  switch (type) {
    case 'h1':
      return { ...baseElement, text: 'New Heading' };
    case 'p':
      return { ...baseElement, text: 'New paragraph text.' };
    case 'text':
      return { ...baseElement, question: 'New Text Question', placeholder: 'Placeholder' };
    case 'email':
      return { ...baseElement, question: 'New Email Question', placeholder: 'name@example.com' };
    default:
      return baseElement;
  }
};

const Toolbox = () => {
  const addElement = useFormStore((state) => state.addElement);

  const handleAddElement = (type: string) => {
    const newElement = generateElement(type);
    addElement(0, newElement);
  };

  return (
    <aside className="w-64 bg-gray-100 p-4 border-r overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Toolbox</h2>
      <div className="grid grid-cols-2 gap-2">
        <ToolboxButton
          label="Heading"
          icon={<Heading1 size={20} />}
          onClick={() => handleAddElement('h1')}
        />
        <ToolboxButton
          label="Paragraph"
          icon={<Pilcrow size={20} />}
          onClick={() => handleAddElement('p')}
        />
        <ToolboxButton
          label="Text Input"
          icon={<Type size={20} />}
          onClick={() => handleAddElement('text')}
        />
        <ToolboxButton
          label="Email Input"
          icon={<Mail size={20} />}
          onClick={() => handleAddElement('email')}
        />
      </div>
    </aside>
  );
};

const ToolboxButton = ({
  label,
  icon,
  onClick,
}: {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="flex flex-col items-center justify-center p-3 bg-white border border-gray-300 rounded-lg hover:bg-blue-50 hover:border-blue-400 transition-all text-sm"
  >
    {icon}
    <span className="mt-1">{label}</span>
  </button>
);

export default Toolbox;