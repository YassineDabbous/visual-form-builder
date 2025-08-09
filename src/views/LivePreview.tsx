import { useEffect, useRef } from 'react';
import useFormStore from '../store/formStore';
import "formsmd/dist/css/formsmd.min.css";
import { Formsmd } from 'formsmd';
import { createComposerFromDefinition } from '../lib/formsmd-renderer';  

const LivePreview = () => {
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
      container.innerHTML = `<div class="p-4 bg-red-100 text-red-700 rounded-md"><strong>Error rendering preview.</strong> Check the console and your form's JSON structure for issues.</div>`;
    }

  }, [formDefinition]);

  return (
    <div className="h-full w-full bg-white p-8 overflow-y-auto">
      <h1 className="text-2xl font-bold mb-2 text-center text-gray-700">Live Form Preview</h1>
      <p className="text-sm text-gray-500 mb-8 text-center">This is an interactive preview rendered by the <strong>forms.md</strong> library.</p>
      <div ref={previewContainerRef} className="max-w-3xl mx-auto border rounded-lg shadow-sm"></div>
    </div>
  );
};

export default LivePreview;