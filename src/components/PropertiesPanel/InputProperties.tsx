import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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

  const handleNumberChange = (prop: 'maxlength' | 'min' | 'max' | 'step' | 'sizeLimit', value: string) => {
    const numValue = value === '' ? undefined : parseInt(value, 10);
    updateElement(element.id, { [prop]: numValue });
  };
  
  const valueProp = element.type === 'file' ? 'currentFile' : 'value';

  return (
    <div className="space-y-4">
      {/* --- General Settings --- */}
      <TextInput
        label={t('question')}
        value={element.question || ''}
        onChange={(e) => updateElement(element.id, { question: e.target.value })}
      />
      <div>
        <TextInput label={t('name_id')} value={element.name || ''} onChange={handleNameChange} className={`w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${!isNameValid ? 'border-red-500' : 'border-gray-300'}`} />
        {!isNameValid && <p className="text-xs text-red-600 mt-1">{t('name_in_use')}</p>}
      </div>
      <TextInput
        label={t('placeholder')}
        value={element.placeholder || ''}
        onChange={(e) => updateElement(element.id, { placeholder: e.target.value })}
      />
      <TextInput
        label={t('default_value')}
        value={element[valueProp] || ''}
        onChange={(e) => updateElement(element.id, { [valueProp]: e.target.value })}
        description={t(element.type === 'file' ? 'url_to_file' : 'initial_value_of_input')}
      />
      
      {isAutoSolvable && (
        <div className="p-3 border rounded-lg bg-green-50 border-green-300 space-y-4">
          <h3 className="text-sm font-semibold text-green-800">{t('auto_correction')}</h3>
          <TextInput
            label={t('correct_answer')}
            value={element.answer || ''}
            onChange={(e) => updateElement(element.id, { answer: e.target.value })}
          />
          <TextInput
            label={t('score')}
            type="number"
            value={element.score ?? ''}
            onChange={(e) => updateElement(element.id, { score: e.target.value === '' ? undefined : parseFloat(e.target.value) })}
          />
        </div>
      )}

      {/* --- Validation --- */}
      <div className="p-3 border rounded-lg bg-gray-50/50 space-y-4">
        <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('validation')}</h3>
        <TextInput
          label={t('validation_pattern')}
          value={element.pattern || ''}
          onChange={(e) => updateElement(element.id, { pattern: e.target.value })}
          placeholder="e.g., ^[A-Za-z]+$"
        />
        {['text', 'email', 'url', 'tel', 'password'].includes(element.type) && (
            <TextInput
            label={t('max_length')}
            type="number"
            value={element.maxlength ?? ''}
            onChange={(e) => handleNumberChange('maxlength', e.target.value)}
          />
        )}
      </div>

      {/* --- Appearance --- */}
      <div className="p-3 border rounded-lg bg-gray-50/50 space-y-3">
        <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('appearance')}</h3>
        <BooleanToggle
          label={t('small_field_size')}
          description={t('small_field_size_description')}
          checked={element.fieldSize === 'sm'}
          onChange={(e) => updateElement(element.id, { fieldSize: e.target.checked ? 'sm' : undefined })}
        />
        <BooleanToggle
          label={t('classic_label_style')}
          description={t('classic_label_style_description')}
          checked={element.labelStyle === 'classic'}
          onChange={(e) => updateElement(element.id, { labelStyle: e.target.checked ? 'classic' : undefined })}
        />
      </div>

      {/* --- Type-Specific Settings --- */}
      {element.type === 'number' && (
        <div className="p-3 border rounded-lg bg-gray-50/50 space-y-4">
          <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('number_options')}</h3>
          <div className="grid grid-cols-2 gap-4">
            <TextInput label={t('min')} type="number" value={element.min ?? ''} onChange={(e) => handleNumberChange('min', e.target.value)} />
            <TextInput label={t('max')} type="number" value={element.max ?? ''} onChange={(e) => handleNumberChange('max', e.target.value)} />
            <TextInput label={t('step')} type="number" value={element.step ?? ''} onChange={(e) => handleNumberChange('step', e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <TextInput label={t('unit_prefix')} value={element.unit || ''} onChange={(e) => updateElement(element.id, { unit: e.target.value })} placeholder="$" />
            <TextInput label={t('unit_suffix')} value={element.unitEnd || ''} onChange={(e) => updateElement(element.id, { unitEnd: e.target.value })} placeholder="kg" />
          </div>
        </div>
      )}

      {element.type === 'tel' && (
        <div className="p-3 border rounded-lg bg-gray-50/50 space-y-4">
          <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('telephone_options')}</h3>
           <TextInput
            label={t('default_country')}
            value={element.country || ''}
            onChange={(e) => updateElement(element.id, { country: e.target.value.toUpperCase() })}
            placeholder="US"
            description={t('iso_alpha_2')}
          />
          <TagsInput
            label={t('available_countries')}
            tags={element.availableCountries || []}
            onTagsChange={(newTags) => updateElement(element.id, { availableCountries: newTags.length > 0 ? newTags : undefined })}
            placeholder={t('add_country_placeholder')}
            description={t('iso_alpha_2_example')}
          />
        </div>
      )}

      {element.type === 'file' && (
        <div className="p-3 border rounded-lg bg-gray-50/50 space-y-4">
          <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('file_options')}</h3>
           <TextInput
            label={t('size_limit_mb')}
            type="number"
            value={element.sizeLimit ?? ''}
            onChange={(e) => handleNumberChange('sizeLimit', e.target.value)}
          />
          <BooleanToggle
            label={t('images_only')}
            description={t('images_only_description')}
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