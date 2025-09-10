import React from 'react';
import { useTranslation } from 'react-i18next';
import type { FormElement } from '../../types/form';
import useFormStore from '../../store/formStore';
import TextInput from './shared/TextInput';

interface CodePropertiesProps {
  element: FormElement;
}

const CodeProperties = ({ element }: CodePropertiesProps) => {
  const { t } = useTranslation();
  const updateElement = useFormStore((state) => state.updateElement);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateElement(element.id, { content: e.target.value });
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newOptions = { ...element.options, language: e.target.value };
    updateElement(element.id, { options: newOptions });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{t('code_content')}</label>
        <textarea
          value={element.content || ''}
          onChange={handleContentChange}
          rows={6}
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm font-mono text-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder={`console.log('Hello, World!');`}
        />
      </div>
      <TextInput
        label={t('language')}
        value={element.options?.language || ''}
        onChange={handleLanguageChange}
        placeholder="e.g., javascript"
        description={t('syntax_highlighting_hint')}
      />
    </div>
  );
};

export default CodeProperties;