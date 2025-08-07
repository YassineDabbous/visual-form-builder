import type { FormElement } from '../../types/form';
import useFormStore from '../../store/formStore';
import TextInput from './shared/TextInput';

interface InputPropertiesProps {
  element: FormElement;
}

const InputProperties = ({ element }: InputPropertiesProps) => {
  const updateElement = useFormStore((state) => state.updateElement);
  
  return (
    <div className="space-y-4">
      <TextInput
        label="Question"
        value={element.question || ''}
        onChange={(e) => updateElement(element.id, { question: e.target.value })}
      />
      <TextInput
        label="Placeholder"
        value={element.placeholder || ''}
        onChange={(e) => updateElement(element.id, { placeholder: e.target.value })}
      />
      <div className="flex items-center gap-2">
        <input
          id="required-checkbox"
          type="checkbox"
          checked={element.required || false}
          onChange={(e) => updateElement(element.id, { required: e.target.checked })}
          className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        />
        <label htmlFor="required-checkbox" className="text-sm text-gray-700">
          Required
        </label>
      </div>
    </div>
  );
};

export default InputProperties;