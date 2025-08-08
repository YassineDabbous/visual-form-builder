import React from 'react';
import type { FormElement } from '../../../types/form';
import useFormStore from '../../../store/formStore';
import TextInput from './TextInput';

interface DisplayConditionEditorProps {
  element: FormElement;
}

const DisplayConditionEditor = ({ element }: DisplayConditionEditorProps) => {
  const updateElement = useFormStore((state) => state.updateElement);

  const condition = element.displayCondition || { dependencies: [], condition: '' };

  const handleDependenciesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const dependencies = e.target.value.split(',').map(dep => dep.trim()).filter(Boolean);
    updateElement(element.id, { displayCondition: { ...condition, dependencies } });
  };

  const handleConditionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateElement(element.id, { displayCondition: { ...condition, condition: e.target.value } });
  };

  return (
    <div className="space-y-4 p-3 border rounded-lg bg-gray-50/50">
      <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Conditional Logic</h3>
      
      <TextInput
        label="Dependencies"
        value={condition.dependencies.join(', ') || ''}
        onChange={handleDependenciesChange}
        placeholder="e.g., field_name_1, field_name_2"
      />
      
      <TextInput
        label="Condition"
        value={condition.condition || ''}
        onChange={handleConditionChange}
        placeholder="e.g., field_name_1 == 'Some Value'"
      />
       <p className="text-xs text-gray-500 -mt-2">
        Show this field only when the condition is true.
      </p>
    </div>
  );
};

export default DisplayConditionEditor;