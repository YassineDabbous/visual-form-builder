import React, { useState } from 'react';
import useFormStore from '../store/formStore';
import { Copy, Check } from 'lucide-react';

const JsonOutputView = () => {
  const formDefinition = useFormStore((state) => state.formDefinition);
  const [copied, setCopied] = useState(false);

  const jsonString = JSON.stringify(formDefinition, null, 2);

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-full w-full bg-gray-800 text-white font-mono text-sm p-4 relative overflow-auto">
      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 p-2 bg-gray-600 hover:bg-gray-500 rounded-lg"
      >
        {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
      </button>
      <pre>
        <code>{jsonString}</code>
      </pre>
    </div>
  );
};

export default JsonOutputView;