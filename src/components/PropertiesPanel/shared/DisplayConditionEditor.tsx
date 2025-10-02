import React from 'react';
import { useTranslation } from 'react-i18next';
import type { FormElement } from '../../../types/form';
import useFormStore from '../../../store/formStore';
import TextInput from './TextInput';

interface DisplayConditionEditorProps {
  element: FormElement;
}

const DisplayConditionEditor = ({ element }: DisplayConditionEditorProps) => {
  const { t } = useTranslation();
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
      <h3 className="text-xs font-semibold text-gray-600 uppercase tracking-wider">{t('conditional_logic')}</h3>
      
      <TextInput
        label={t('dependencies')}
        value={condition.dependencies.join(', ') || ''}
        onChange={handleDependenciesChange}
        placeholder={t('dependencies_placeholder')}
      />
      
      <TextInput
        label={t('condition')}
        value={condition.condition || ''}
        onChange={handleConditionChange}
        placeholder={t('condition_placeholder')}
      />
       <p className="text-xs text-gray-500 -mt-2">
        {t('condition_description')}
      </p>
    </div>
  );
};

export default DisplayConditionEditor;