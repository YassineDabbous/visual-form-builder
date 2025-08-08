import React, { useState, useEffect } from 'react';
import useFormStore from '../../store/formStore';
import TextInput from './shared/TextInput';
import { isNameUnique } from '../../lib/validation'; 
import type { FormElement } from '../../types/form';
import SharedProperties, { BooleanToggle } from './shared/SharedProperties';
import DisplayConditionEditor from './shared/DisplayConditionEditor';
import TagsInput from './shared/TagsInput';

interface InputPropertiesProps {
  element: FormElement;
}

const InputProperties = ({ element }: InputPropertiesProps) => {
  const updateElement = useFormStore((state) => state.updateElement);
  const formDefinition = useFormStore((state) => state.formDefinition);
  
  const [isNameValid, setIsNameValid] = useState(true);

  useEffect(() => {
    setIsNameValid(isNameUnique(element.name, element.id, formDefinition));
  }, [element.name, element.id, formDefinition]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = e.target.value.replace(/[^a-zA-Z0-9_]/g, '');
    updateElement(element.id, { name: sanitizedValue || element.id });
  };

  const handleNumberChange = (prop: 'maxlength' | 'min' | 'max' | 'step' | 'sizeLimit', value: string) => {
    const numValue = value === '' ? undefined : parseInt(value, 10);
    updateElement(element.id, { [prop]: numValue });
  };
  
  const valueProp = element.type === 'file' ? 'currentFile' : 'value';

  return (
    <div className="space-y-4">
      {/* --- General Settings --- */}
      <TextInput
        label="Question"
        value={element.question || ''}
        onChange={(e) => updateElement(element.id, { question: e.target.value })}
      />
      <div>
        <TextInput label="Name / ID" value={element.name || ''} onChange={handleNameChange} className={`w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${!isNameValid ? 'border-red-500' : 'border-gray-300'}`} />
        {!isNameValid && <p className="text-xs text-red-600 mt-1">This name is already in use.</p>}
      </div>
      <TextInput
        label="Placeholder"
        value={element.placeholder || ''}
        onChange={(e) => updateElement(element.id, { placeholder: e.target.value })}
      />
      <TextInput
        label="Default Value"
        value={element[valueProp] || ''}
        onChange={(e) => updateElement(element.id, { [valueProp]: e.target.value })}
        description={element.type === 'file' ? 'URL to an existing file.' : 'Initial value of the input.'}
      />

      {/* --- Validation --- */}
      <div className="p-3 border rounded-lg bg-gray-50/50 space-y-4">
        <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Validation</h3>
        <TextInput
          label="Validation Pattern (Regex)"
          value={element.pattern || ''}
          onChange={(e) => updateElement(element.id, { pattern: e.target.value })}
          placeholder="e.g., ^[A-Za-z]+$"
        />
        {['text', 'email', 'url', 'tel', 'password'].includes(element.type) && (
            <TextInput
            label="Max Length"
            type="number"
            value={element.maxlength ?? ''}
            onChange={(e) => handleNumberChange('maxlength', e.target.value)}
          />
        )}
      </div>

      {/* --- Appearance --- */}
      <div className="p-3 border rounded-lg bg-gray-50/50 space-y-3">
        <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Appearance</h3>
        <BooleanToggle
          label="Small Field Size"
          description="Use smaller fonts for question and input."
          checked={element.fieldSize === 'sm'}
          onChange={(e) => updateElement(element.id, { fieldSize: e.target.checked ? 'sm' : undefined })}
        />
        <BooleanToggle
          label="Classic Label Style"
          description="Use smaller fonts for question and description."
          checked={element.labelStyle === 'classic'}
          onChange={(e) => updateElement(element.id, { labelStyle: e.target.checked ? 'classic' : undefined })}
        />
      </div>

      {/* --- Type-Specific Settings --- */}
      {element.type === 'number' && (
        <div className="p-3 border rounded-lg bg-gray-50/50 space-y-4">
          <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Number Options</h3>
          <div className="grid grid-cols-2 gap-4">
            <TextInput label="Min" type="number" value={element.min ?? ''} onChange={(e) => handleNumberChange('min', e.target.value)} />
            <TextInput label="Max" type="number" value={element.max ?? ''} onChange={(e) => handleNumberChange('max', e.target.value)} />
            <TextInput label="Step" type="number" value={element.step ?? ''} onChange={(e) => handleNumberChange('step', e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <TextInput label="Unit (Prefix)" value={element.unit || ''} onChange={(e) => updateElement(element.id, { unit: e.target.value })} placeholder="$" />
            <TextInput label="Unit (Suffix)" value={element.unitEnd || ''} onChange={(e) => updateElement(element.id, { unitEnd: e.target.value })} placeholder="kg" />
          </div>
        </div>
      )}

      {element.type === 'tel' && (
        <div className="p-3 border rounded-lg bg-gray-50/50 space-y-4">
          <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Telephone Options</h3>
           <TextInput
            label="Default Country"
            value={element.country || ''}
            onChange={(e) => updateElement(element.id, { country: e.target.value.toUpperCase() })}
            placeholder="US"
            description="ISO alpha-2 country code."
          />
          <TagsInput
            label="Available Countries"
            tags={element.availableCountries || []}
            onTagsChange={(newTags) => updateElement(element.id, { availableCountries: newTags.length > 0 ? newTags : undefined })}
            placeholder="Add country and press Enter..."
            description="ISO alpha-2 codes. e.g., US, CA, GB"
          />
        </div>
      )}

      {element.type === 'file' && (
        <div className="p-3 border rounded-lg bg-gray-50/50 space-y-4">
          <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">File Options</h3>
           <TextInput
            label="Size Limit (MB)"
            type="number"
            value={element.sizeLimit ?? ''}
            onChange={(e) => handleNumberChange('sizeLimit', e.target.value)}
          />
          <BooleanToggle
            label="Images Only"
            description="Accept only image file types."
            checked={element.imageOnly || false}
            onChange={(e) => updateElement(element.id, { imageOnly: e.target.checked })}
          />
        </div>
      )}

      {/* --- Reusable Shared Editors --- */}
      <SharedProperties element={element} />
      <DisplayConditionEditor element={element} />
    </div>
  );
};

export default InputProperties;