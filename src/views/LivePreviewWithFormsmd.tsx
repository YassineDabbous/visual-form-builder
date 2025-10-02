import { useEffect, useRef } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import useFormStore from '../store/formStore';
import "formsmd/dist/css/formsmd.min.css";
import { Formsmd } from 'formsmd';
import { createComposerFromDefinition } from '../lib/formsmd-renderer';  

const LivePreviewWithFormsmd = () => {
  const { t } = useTranslation();
  const formDefinition = useFormStore((state) => state.formDefinition);
  const previewContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = previewContainerRef.current;
    if (!container) return;

    container.innerHTML = '';

    try {
      const formHost = document.createElement('div');
      formHost.id = formDefinition.settings.id || 'formsmd-preview';
      container.appendChild(formHost);
      
      const composer = createComposerFromDefinition(formDefinition);
      
      const formsmd = new Formsmd(composer.template, formHost, formDefinition.options);
      formsmd.init();

    } catch (error) {
      console.error("Error rendering forms.md preview:", error);
      container.innerHTML = `<div class="p-4 bg-red-100 text-red-700 rounded-md"><strong>${t('error_rendering_preview')}</strong> ${t('check_console_for_errors')}</div>`;
    }

  }, [formDefinition, t]);

  return (
    <div className="h-full w-full bg-white p-8 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-2 text-center text-gray-700">{t('live_form_preview')}</h1>
      <p className="text-sm text-gray-500 mb-8 text-center"><Trans i18nKey="interactive_preview_description" components={[<strong />]} /></p>
      <div ref={previewContainerRef} className="max-w-3xl mx-auto border rounded-lg shadow-sm"></div>
    </div>
  );
};

export default LivePreviewWithFormsmd;