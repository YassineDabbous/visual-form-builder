import React, { useState, useEffect } from 'react';
import useFormStore from '../../store/formStore';
import TextInput from './shared/TextInput';
import { isNameUnique } from '../../lib/validation'; 
import type { FormElement } from '../../types/form';

interface InputPropertiesProps {
  element: FormElement;
}

const InputProperties = ({ element }: InputPropertiesProps) => {
  const updateElement = useFormStore((state) => state.updateElement);
  const formDefinition = useFormStore((state) => state.formDefinition);
  
  const [isNameValid, setIsNameValid] = useState(true);

  useEffect(() => {
    const isValid = isNameUnique(element.name, element.id, formDefinition);
    setIsNameValid(isValid);
  }, [element.name, element.id, formDefinition]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = e.target.value.replace(/[^a-zA-Z0-9_]/g, '');
    updateElement(element.id, { name: sanitizedValue });
  };

  return (
    <div className="space-y-4">
      <TextInput
        label="Question"
        value={element.question || ''}
        onChange={(e) => updateElement(element.id, { question: e.target.value })}
      />
      <div>
        <TextInput
          label="Name / ID"
          value={element.name || ''}
          onChange={handleNameChange}
          // Add a red border if the name is not valid
          className={`
            w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500
            ${!isNameValid ? 'border-red-500 ring-red-500' : 'border-gray-300'}
          `}
        />
        <p className="text-xs text-gray-500 mt-1">
          Unique identifier for this field. No spaces or special characters.
        </p>
        {!isNameValid && (
          <p className="text-xs text-red-600 mt-1">
            This name is already in use. Please choose a unique name.
          </p>
        )}
      </div>
      <TextInput
        label="Placeholder"
        value={element.placeholder || ''}
        onChange={(e) => updateElement(element.id, { placeholder: e.target.value })}
      />
      <div className="flex items-center gap-2">
        <input
          id="required-checkbox"
          type="checkbox"
          checked={element.required || false}
          onChange={(e) => updateElement(element.id, { required: e.target.checked })}
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <label htmlFor="required-checkbox" className="text-sm text-gray-700">
          Required
        </label>
      </div>
    </div>
  );
};

export default InputProperties;