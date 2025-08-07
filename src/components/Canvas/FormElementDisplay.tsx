import React from 'react';
import type { FormElement } from '../../types/form';
import { Mail, Type } from 'lucide-react';

interface FormElementDisplayProps {
  element: FormElement;
}

const FormElementDisplay = ({ element }: FormElementDisplayProps) => {
  const renderInputPlaceholder = (
    question: string,
    placeholder: string,
    icon: React.ReactNode
  ) => (
    <div className="p-3 bg-white rounded-lg border border-gray-200">
      <label className="text-sm text-gray-600 block mb-1">{question}</label>
      <div className="flex items-center gap-2 border border-gray-300 rounded-md p-2 bg-gray-50">
        {icon}
        <span className="text-gray-400 text-sm">{placeholder}</span>
      </div>
    </div>
  );

  switch (element.type) {
    case 'h1':
      return <h1 className="text-3xl font-bold py-2">{element.text}</h1>;
    case 'h2':
      return <h2 className="text-2xl font-semibold py-2 border-b">{element.text}</h2>;
    case 'p':
      return <p className="text-base py-2">{element.text}</p>;
    case 'hr':
      return <hr className="my-4" />;
      
    case 'text':
      return renderInputPlaceholder(
        element.question || 'Text Input',
        element.placeholder || 'User input appears here...',
        <Type size={16} className="text-gray-400" />
      );
      
    case 'email':
      return renderInputPlaceholder(
        element.question || 'Email Input',
        element.placeholder || 'name@example.com',
        <Mail size={16} className="text-gray-400" />
      );


    default:
      return (
        <div className="p-3 bg-red-100 text-red-700 rounded-lg border border-red-300">
          Unknown Element Type: {element.type}
        </div>
      );
  }
};

export default FormElementDisplay;