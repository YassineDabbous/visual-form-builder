import React, { useState, useEffect } from 'react';
import type { FormElement } from '../../types/form';
import useFormStore from '../../store/formStore';
import TextInput from './shared/TextInput';
import SharedProperties, { BooleanToggle } from './shared/SharedProperties';
import DisplayConditionEditor from './shared/DisplayConditionEditor';

const SelectInput = ({ label, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement> & { label: string }) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <select {...props} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
        {children}
      </select>
    </div>
);


interface ScalePropertiesProps {
  element: FormElement;
}

const ScaleProperties = ({ element }: ScalePropertiesProps) => {
  const updateElement = useFormStore((state) => state.updateElement);

  const [errors, setErrors] = useState<{ startAt?: string; outOf?: string }>({});

  const isOpinion = element.type === 'opinionScale';

  useEffect(() => {
    const newErrors: { startAt?: string; outOf?: string } = {};

    if (isOpinion) {
      // Validate startAt
      if (element.startAt !== undefined && ![0, 1].includes(element.startAt)) {
        newErrors.startAt = 'Must be 0 or 1.';
      }

      // Validate outOf
      if (element.outOf !== undefined && (element.outOf < 5 || element.outOf > 10)) {
        newErrors.outOf = 'Must be between 5 and 10.';
      }
    }
    
    setErrors(newErrors);
  }, [element.startAt, element.outOf, isOpinion]);


  const handleNumberChange = (prop: 'outOf' | 'startAt' | 'value', value: string) => {
    const numValue = value === '' ? undefined : parseInt(value, 10);
    // Allow the invalid value to be set, the UI will show the error
    updateElement(element.id, { [prop]: numValue });
  };

  const isRating = element.type === 'rating';
  
  return (
    <div className="space-y-4">
      <TextInput
        label="Question"
        value={element.question || ''}
        onChange={(e) => updateElement(element.id, { question: e.target.value })}
      />
      <TextInput
        label="Default Value"
        type="number"
        value={element.value ?? ''}
        onChange={(e) => handleNumberChange('value', e.target.value)}
      />

      {isRating && (
        <div className="p-3 border rounded-lg bg-gray-50/50 space-y-4">
          <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Rating Options</h3>
          <TextInput label="Number of Icons (outOf)" type="number" value={element.outOf ?? ''} onChange={(e) => handleNumberChange('outOf', e.target.value)} />
          <SelectInput label="Icon Style" value={element.icon || 'star'} onChange={(e) => updateElement(element.id, { icon: e.target.value })}>
            <option value="star">Star</option>
            <option value="heart">Heart</option>
          </SelectInput>
           <BooleanToggle label="Hide numeric labels" checked={element.hideLabels || false} onChange={(e) => updateElement(element.id, { hideLabels: e.target.checked })} />
        </div>
      )}

      {isOpinion && (
        <div className="p-3 border rounded-lg bg-gray-50/50 space-y-4">
          <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Opinion Scale Options</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <TextInput
                label="Starts At (0 or 1)"
                type="number"
                value={element.startAt ?? ''}
                onChange={(e) => handleNumberChange('startAt', e.target.value)}
                className={`w-full p-2 border rounded-md shadow-sm ${errors.startAt ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.startAt && <p className="text-xs text-red-600 mt-1">{errors.startAt}</p>}
            </div>
            <div>
              <TextInput
                label="Ends At (5-10)"
                type="number"
                value={element.outOf ?? ''}
                onChange={(e) => handleNumberChange('outOf', e.target.value)}
                className={`w-full p-2 border rounded-md shadow-sm ${errors.outOf ? 'border-red-500' : 'border-gray-300'}`}
              />
              {errors.outOf && <p className="text-xs text-red-600 mt-1">{errors.outOf}</p>}
            </div>
          </div>
          <TextInput label="Start Label (labelStart)" value={element.labelStart || ''} onChange={(e) => updateElement(element.id, { labelStart: e.target.value })} />
          <TextInput label="End Label (labelEnd)" value={element.labelEnd || ''} onChange={(e) => updateElement(element.id, { labelEnd: e.target.value })} />
          <BooleanToggle label="Hide Start Label" checked={element.hideLabelStart || false} onChange={(e) => updateElement(element.id, { hideLabelStart: e.target.checked })} />
          <BooleanToggle label="Hide End Label" checked={element.hideLabelEnd || false} onChange={(e) => updateElement(element.id, { hideLabelEnd: e.target.checked })} />
        </div>
      )}

      <SharedProperties element={element} />
      <DisplayConditionEditor element={element} />
    </div>
  );
};

export default ScaleProperties;