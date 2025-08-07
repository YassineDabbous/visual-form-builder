import type { FormElement } from '../../types/form';
import useFormStore from '../../store/formStore';
import TextInput from './shared/TextInput';

interface TextContentPropertiesProps {
  element: FormElement;
}

const TextContentProperties = ({ element }: TextContentPropertiesProps) => {
  const updateElement = useFormStore((state) => state.updateElement);

  return (
    <div className="space-y-4">
      <TextInput
        label="Text Content"
        value={element.text || ''}
        onChange={(e) => updateElement(element.id, { text: e.target.value })}
      />
    </div>
  );
};

export default TextContentProperties;