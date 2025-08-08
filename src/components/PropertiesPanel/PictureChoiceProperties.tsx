import React, { useState, useEffect } from 'react';
import type { FormElement } from '../../types/form';
import useFormStore from '../../store/formStore';
import TextInput from './shared/TextInput';
import { PlusCircle, Trash2 } from 'lucide-react';
import SharedProperties, { BooleanToggle } from './shared/SharedProperties';
import DisplayConditionEditor from './shared/DisplayConditionEditor';
import { isNameUnique } from '../../lib/validation';

interface PictureChoice {
  label: string;
  value: string;
  image: string;
}

interface PictureChoicePropertiesProps {
  element: FormElement;
}

const PictureChoiceProperties = ({ element }: PictureChoicePropertiesProps) => {
  const updateElement = useFormStore((state) => state.updateElement);
  const formDefinition = useFormStore((state) => state.formDefinition);
  const choices: PictureChoice[] = element.choices || [];
  const checkedValues: string[] = element.checked || [];

  const [isNameValid, setIsNameValid] = useState(true);

  useEffect(() => {
    setIsNameValid(isNameUnique(element.name, element.id, formDefinition));
  }, [element.name, element.id, formDefinition]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = e.target.value.replace(/[^a-zA-Z0-9_]/g, '');
    updateElement(element.id, { name: sanitizedValue || element.id });
  };

  const handlePropertyChange = (index: number, prop: keyof PictureChoice, value: string) => {
    const newChoices = [...choices];
    newChoices[index] = { ...newChoices[index], [prop]: value };
    updateElement(element.id, { choices: newChoices });
  };

  const addChoice = () => {
    const newChoice: PictureChoice = {
      label: `New Label ${choices.length + 1}`,
      value: `new_value_${choices.length + 1}`,
      image: 'https://img.icons8.com/clouds/200/help.png',
    };
    updateElement(element.id, { choices: [...choices, newChoice] });
  };

  const removeChoice = (index: number) => {
    const newChoices = [...choices];
    newChoices.splice(index, 1);
    updateElement(element.id, { choices: newChoices });
  };

  const handleDefaultCheckedChange = (choiceValue: string, isChecked: boolean) => {
    let newCheckedValues = [...checkedValues];
    if (isChecked) {
      if (!newCheckedValues.includes(choiceValue)) newCheckedValues.push(choiceValue);
    } else {
      newCheckedValues = newCheckedValues.filter(val => val !== choiceValue);
    }
    updateElement(element.id, { checked: newCheckedValues.length > 0 ? newCheckedValues : undefined });
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
          className={`w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${!isNameValid ? 'border-red-500' : 'border-gray-300'}`}
        />
        {!isNameValid && <p className="text-xs text-red-600 mt-1">This name is already in use.</p>}
      </div>
      
      <div className="p-3 border rounded-lg bg-gray-50/50 space-y-4">
        <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Picture Options</h3>
        <BooleanToggle label="Allow multiple selections" checked={element.multiple || false} onChange={(e) => updateElement(element.id, { multiple: e.target.checked })} />
        <BooleanToggle label="Supersize pictures" checked={element.supersize || false} onChange={(e) => updateElement(element.id, { supersize: e.target.checked })} />
        <BooleanToggle label="Hide text labels" checked={element.hideLabels || false} onChange={(e) => updateElement(element.id, { hideLabels: e.target.checked })} />
        <BooleanToggle label="Hide form text" description="Hides 'Choose as many as you like' text." checked={element.hideFormText || false} onChange={(e) => updateElement(element.id, { hideFormText: e.target.checked })} />
      </div>

      {element.multiple && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Default Selections</label>
            <div className="space-y-2 p-3 border rounded-md bg-white">
              {choices.map((choice, index) => (
                <BooleanToggle key={index} label={choice.label || `(Option ${index + 1})`} checked={checkedValues.includes(choice.value)} onChange={(e) => handleDefaultCheckedChange(choice.value, e.target.checked)} />
              ))}
              {choices.length === 0 && <p className="text-xs text-gray-400">Add choices to set defaults.</p>}
            </div>
          </div>
        )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Choices</label>
        <div className="space-y-3">
          {choices.map((choice, index) => (
            <div key={index} className="p-3 border rounded-lg space-y-2 bg-white relative">
               <button onClick={() => removeChoice(index)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
                <Trash2 size={16} />
              </button>
              <TextInput label="Label" value={choice.label} onChange={(e) => handlePropertyChange(index, 'label', e.target.value)} />
              <TextInput label="Value" value={choice.value} onChange={(e) => handlePropertyChange(index, 'value', e.target.value)} />
              <TextInput label="Image URL" value={choice.image} onChange={(e) => handlePropertyChange(index, 'image', e.target.value)} />
            </div>
          ))}
          <button onClick={addChoice} className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 pt-2">
            <PlusCircle size={16} />
            Add Picture Option
          </button>
        </div>
      </div>

      <SharedProperties element={element} />
      <DisplayConditionEditor element={element} />
    </div>
  );
};

export default PictureChoiceProperties;