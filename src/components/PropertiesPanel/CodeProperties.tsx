import React from 'react';
import type { FormElement } from '../../types/form';
import useFormStore from '../../store/formStore';
import TextInput from './shared/TextInput';

interface CodePropertiesProps {
  element: FormElement;
}

const CodeProperties = ({ element }: CodePropertiesProps) => {
  const updateElement = useFormStore((state) => state.updateElement);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateElement(element.id, { content: e.target.value });
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newOptions = { ...element.options, language: e.target.value };
    updateElement(element.id, { options: newOptions });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Code Content</label>
        <textarea
          value={element.content || ''}
          onChange={handleContentChange}
          rows={6}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm font-mono text-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder={`console.log('Hello, World!');`}
        />
      </div>
      <TextInput
        label="Language"
        value={element.options?.language || ''}
        onChange={handleLanguageChange}
        placeholder="e.g., javascript"
        description="A hint for syntax highlighting."
      />
    </div>
  );
};

export default CodeProperties;