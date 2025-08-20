import React, { useState, useEffect } from 'react';
import type { FormElement } from '../../types/form';
import useFormStore from '../../store/formStore';
import TextInput from './shared/TextInput';
import { PlusCircle, Trash2 } from 'lucide-react';
import SharedProperties, { BooleanToggle } from './shared/SharedProperties';
import DisplayConditionEditor from './shared/DisplayConditionEditor';
import { isNameUnique } from '../../lib/validation';

interface ChoicePropertiesProps {
  element: FormElement;
}

const ChoiceProperties = ({ element }: ChoicePropertiesProps) => {
  const updateElement = useFormStore((state) => state.updateElement);
  const formDefinition = useFormStore((state) => state.formDefinition);
  const isAutoSolvable = useFormStore((state) => state.formDefinition.settings.isAutoSolvable);

  const [isNameValid, setIsNameValid] = useState(true);

  useEffect(() => {
    setIsNameValid(isNameUnique(element.name, element.id, formDefinition));
  }, [element.name, element.id, formDefinition]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = e.target.value.replace(/[^a-zA-Z0-9_]/g, '');
    updateElement(element.id, { name: sanitizedValue || element.id });
  };

  const optionsKey = element.type === 'select' ? 'options' : 'choices';
  const choices: string[] = element[optionsKey] || [];
  const checkedValues: string[] = element.checked || [];

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
        onChange={handleQuestionChange}
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
        <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Choice Options</h3>

        {element.type === 'select' && (
          <TextInput
            label="Default Selected Value"
            value={element.selected || ''}
            onChange={(e) => updateElement(element.id, { selected: e.target.value })}
            description="Must match one of the option values exactly."
          />
        )}
        
        {element.type === 'choice' && (
          <div className="space-y-3">
            <BooleanToggle label="Allow multiple selections" checked={element.multiple || false} onChange={(e) => updateElement(element.id, { multiple: e.target.checked })} />
            <BooleanToggle label="Display horizontally" checked={element.horizontal || false} onChange={(e) => updateElement(element.id, { horizontal: e.target.checked })} />
            <BooleanToggle label="Hide form text" description="Hides 'Choose as many as you like' text." checked={element.hideFormText || false} onChange={(e) => updateElement(element.id, { hideFormText: e.target.checked })} />
          </div>
        )}
        
        {element.type === 'choice' && element.multiple && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Default Selections</label>
            <div className="space-y-2 p-3 border rounded-md bg-white">
              {choices.map((choice, index) => (
                <BooleanToggle key={index} label={choice || `(Option ${index + 1})`} checked={checkedValues.includes(choice)} onChange={(e) => handleDefaultCheckedChange(choice, e.target.checked)} />
              ))}
              {choices.length === 0 && <p className="text-xs text-gray-400">Add choices to set defaults.</p>}
            </div>
          </div>
        )}

        
      {isAutoSolvable && (
        <div className="p-3 border rounded-lg bg-green-50 border-green-300 space-y-4">
          <h3 className="text-sm font-semibold text-green-800">Auto-Correction</h3>
          {element.type === 'select' && (
            <TextInput
              label="Correct Answer"
              value={element.answer || ''}
              onChange={(e) => updateElement(element.id, { answer: e.target.value })}
              description="Must match one of the option values."
            />
          )}
          {element.type === 'choice' && (
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Correct Answer(s)</label>
                <div className="space-y-2 p-3 border rounded-md bg-white">
                  {choices.map((choice, index) => (
                    <BooleanToggle
                      key={index}
                      label={choice || `(Option ${index + 1})`}
                      checked={(element.answer || []).includes(choice)}
                      onChange={(e) => {
                        let newAnswer = [...(element.answer || [])];
                        if (e.target.checked) {
                          if (!newAnswer.includes(choice)) newAnswer.push(choice);
                        } else {
                          newAnswer = newAnswer.filter(ans => ans !== choice);
                        }
                        updateElement(element.id, { answer: newAnswer.length > 0 ? newAnswer : undefined });
                      }}
                    />
                  ))}
                </div>
              </div>
          )}
          <TextInput
            label="Score"
            type="number"
            value={element.score ?? ''}
            onChange={(e) => updateElement(element.id, { score: e.target.value === '' ? undefined : parseFloat(e.target.value) })}
          />
        </div>
      )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">{element.type === 'select' ? 'Options' : 'Choices'}</label>
          <div className="space-y-2">
            {choices.map((choice: string, index: number) => (
              <div key={index} className="flex items-center gap-2">
                <input type="text" value={choice} onChange={(e) => handleChoiceChange(index, e.target.value)} className="flex-grow p-2 border border-gray-300 rounded-md shadow-sm" placeholder={`Option ${index + 1}`} />
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
      
      <SharedProperties element={element} />
      <DisplayConditionEditor element={element} />
    </div>
  );
};

export default ChoiceProperties;