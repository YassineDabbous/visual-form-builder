import React from 'react';
import type { FormElement } from '../../../types/form';
import useFormStore from '../../../store/formStore';
import TextInput from './TextInput';

interface SharedPropertiesProps {
  element: FormElement;
}
export const BooleanToggle = ({
  label,
  description,
  checked,
  onChange,
}: {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div className="flex items-start gap-2">
    <input
      id={`checkbox-${label}`}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1"
    />
    <div>
      <label htmlFor={`checkbox-${label}`} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      {description && <p className="text-xs text-gray-500">{description}</p>}
    </div>
  </div>
);

const SharedProperties = ({ element }: SharedPropertiesProps) => {
  const updateElement = useFormStore((state) => state.updateElement);

  return (
    <div className="space-y-4 p-3 border rounded-lg bg-gray-50/50">
      <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Common Options</h3>
      
      <TextInput
        label="Description"
        value={element.description || ''}
        onChange={(e) => updateElement(element.id, { description: e.target.value })}
        placeholder="Helper text below the question..."
      />
      
      <div className="space-y-3">
        <BooleanToggle
          label="Required"
          description="User must fill out this field."
          checked={element.required || false}
          onChange={(e) => updateElement(element.id, { required: e.target.checked })}
        />
        <BooleanToggle
          label="Disabled"
          description="User cannot interact with this field."
          checked={element.disabled || false}
          onChange={(e) => updateElement(element.id, { disabled: e.target.checked })}
        />
        <BooleanToggle
          label="Autofocus"
          description="Focus this field when the slide loads."
          checked={element.autofocus || false}
          onChange={(e) => updateElement(element.id, { autofocus: e.target.checked })}
        />
        <BooleanToggle
          label="Subfield Style"
          description="Use smaller fonts for question/description."
          checked={element.subfield || false}
          onChange={(e) => updateElement(element.id, { subfield: e.target.checked })}
        />
      </div>
    </div>
  );
};

export default SharedProperties;