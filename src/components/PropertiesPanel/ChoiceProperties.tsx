import React from 'react';
import type { FormElement } from '../../types/form';
import useFormStore from '../../store/formStore';
import TextInput from './shared/TextInput';
import { PlusCircle, Trash2 } from 'lucide-react';

interface ChoicePropertiesProps {
  element: FormElement;
}

const ChoiceProperties = ({ element }: ChoicePropertiesProps) => {
  const updateElement = useFormStore((state) => state.updateElement);

  const optionsKey = element.type === 'select' ? 'options' : 'choices';
  const choices = element[optionsKey] || [];

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateElement(element.id, { question: e.target.value });
  };

  const handleChoiceChange = (index: number, value: string) => {
    const newChoices = [...choices];
    newChoices[index] = value;
    updateElement(element.id, { [optionsKey]: newChoices });
  };

  const addChoice = () => {
    const newChoices = [...choices, `New Option ${choices.length + 1}`];
    updateElement(element.id, { [optionsKey]: newChoices });
  };
  
  const removeChoice = (index: number) => {
    const newChoices = [...choices];
    newChoices.splice(index, 1);
    updateElement(element.id, { [optionsKey]: newChoices });
  };

  return (
    <div className="space-y-4">
      <TextInput
        label="Question"
        value={element.question || ''}
        onChange={handleQuestionChange}
      />

      {/* NEW: Toggle for multiple selections, only for 'choice' type */}
      {element.type === 'choice' && (
        <div className="flex items-center gap-2 p-2 border rounded-md">
          <input
            id="multiple-checkbox"
            type="checkbox"
            checked={element.multiple || false}
            onChange={(e) => updateElement(element.id, { multiple: e.target.checked })}
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="multiple-checkbox" className="text-sm text-gray-700">
            Allow multiple selections
          </label>
        </div>
      )}
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Options</label>
        <div className="space-y-2">
          {choices.map((choice: string, index: number) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="text"
                value={choice}
                onChange={(e) => handleChoiceChange(index, e.target.value)}
                className="flex-grow p-2 border border-gray-300 rounded-md shadow-sm"
              />
              <button onClick={() => removeChoice(index)} className="text-gray-400 hover:text-red-500">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
          <button onClick={addChoice} className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800">
            <PlusCircle size={16} />
            Add Option
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChoiceProperties;