import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import type { FormElement } from '../../types/form';
import useFormStore from '../../store/formStore';
import TextInput from './shared/TextInput';
import SharedProperties, { BooleanToggle } from './shared/SharedProperties';
import DisplayConditionEditor from './shared/DisplayConditionEditor';
import { isNameUnique } from '../../lib/validation';

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
  const { t } = useTranslation();
  const updateElement = useFormStore((state) => state.updateElement);
  const formDefinition = useFormStore((state) => state.formDefinition);

  const [isNameValid, setIsNameValid] = useState(true);
  const [errors, setErrors] = useState<{ startAt?: string; outOf?: string }>({});

  useEffect(() => {
    setIsNameValid(isNameUnique(element.name, element.id, formDefinition));
    
    const newErrors: { startAt?: string; outOf?: string } = {};
    if (element.type === 'opinionScale') {
      if (element.startAt !== undefined && ![0, 1].includes(element.startAt)) newErrors.startAt = 'Must be 0 or 1.';
      if (element.outOf !== undefined && (element.outOf < 5 || element.outOf > 10)) newErrors.outOf = 'Must be between 5 and 10.';
    }
    setErrors(newErrors);
  }, [element.name, element.startAt, element.outOf, element.id, formDefinition]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sanitizedValue = e.target.value.replace(/[^a-zA-Z0-9_]/g, '');
    updateElement(element.id, { name: sanitizedValue || element.id });
  };

  const handleNumberChange = (prop: 'outOf' | 'startAt' | 'value', value: string) => {
    const numValue = value === '' ? undefined : parseInt(value, 10);
    updateElement(element.id, { [prop]: numValue });
  };

  const isRating = element.type === 'rating';
  const isOpinion = element.type === 'opinionScale';

  return (
    <div className="space-y-4">
      <TextInput
        label={t('question')}
        value={element.question || ''}
        onChange={(e) => updateElement(element.id, { question: e.target.value })}
      />

      <div>
        <TextInput
          label={t('name_id')}
          value={element.name || ''}
          onChange={handleNameChange}
          className={`w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 ${!isNameValid ? 'border-red-500' : 'border-gray-300'}`}
        />
        {!isNameValid && <p className="text-xs text-red-600 mt-1">{t('name_in_use')}</p>}
      </div>

      <TextInput
        label={t('default_value')}
        type="number"
        value={element.value ?? ''}
        onChange={(e) => handleNumberChange('value', e.target.value)}
      />

      {isRating && (
        <div className="p-3 border rounded-lg bg-gray-50/50 space-y-4">
          <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('rating_options')}</h3>
          <TextInput label={t('number_of_icons')} type="number" value={element.outOf ?? ''} onChange={(e) => handleNumberChange('outOf', e.target.value)} />
          <SelectInput label={t('icon_style')} value={element.icon || 'star'} onChange={(e) => updateElement(element.id, { icon: e.target.value })}>
            <option value="star">{t('star')}</option>
            <option value="heart">{t('heart')}</option>
          </SelectInput>
           <BooleanToggle label={t('hide_numeric_labels')} checked={element.hideLabels || false} onChange={(e) => updateElement(element.id, { hideLabels: e.target.checked })} />
        </div>
      )}

      {isOpinion && (
        <div className="p-3 border rounded-lg bg-gray-50/50 space-y-4">
          <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('opinion_scale_options')}</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <TextInput label={t('starts_at')} type="number" value={element.startAt ?? ''} onChange={(e) => handleNumberChange('startAt', e.target.value)} className={`w-full p-2 border rounded-md shadow-sm ${errors.startAt ? 'border-red-500' : 'border-gray-300'}`} />
              {errors.startAt && <p className="text-xs text-red-600 mt-1">{t('must_be_0_or_1')}</p>}
            </div>
            <div>
              <TextInput label={t('ends_at')} type="number" value={element.outOf ?? ''} onChange={(e) => handleNumberChange('outOf', e.target.value)} className={`w-full p-2 border rounded-md shadow-sm ${errors.outOf ? 'border-red-500' : 'border-gray-300'}`} />
              {errors.outOf && <p className="text-xs text-red-600 mt-1">{t('must_be_between_5_and_10')}</p>}
            </div>
          </div>
          <TextInput label={t('start_label')} value={element.labelStart || ''} onChange={(e) => updateElement(element.id, { labelStart: e.target.value })} />
          <TextInput label={t('end_label')} value={element.labelEnd || ''} onChange={(e) => updateElement(element.id, { labelEnd: e.target.value })} />
          <BooleanToggle label={t('hide_start_label')} checked={element.hideLabelStart || false} onChange={(e) => updateElement(element.id, { hideLabelStart: e.target.checked })} />
          <BooleanToggle label={t('hide_end_label')} checked={element.hideLabelEnd || false} onChange={(e) => updateElement(element.id, { hideLabelEnd: e.target.checked })} />
        </div>
      )}

      <SharedProperties element={element} />
      <DisplayConditionEditor element={element} />
    </div>
  );
};

export default ScaleProperties;