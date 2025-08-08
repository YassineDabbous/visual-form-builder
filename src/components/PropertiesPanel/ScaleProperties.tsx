import type { FormElement } from '../../types/form';
import useFormStore from '../../store/formStore';
import TextInput from './shared/TextInput';

interface ScalePropertiesProps {
  element: FormElement;
}

const ScaleProperties = ({ element }: ScalePropertiesProps) => {
  const updateElement = useFormStore((state) => state.updateElement);

  const handleNumberChange = (prop: 'min' | 'max', value: string) => {
    const numValue = value === '' ? undefined : parseInt(value, 10);
    updateElement(element.id, { [prop]: numValue });
  };

  return (
    <div className="space-y-4">
      <TextInput
        label="Question"
        value={element.question || ''}
        onChange={(e) => updateElement(element.id, { question: e.target.value })}
      />

      <div className="flex gap-4">
        {/* The 'min' input is only for opinionScale */}
        {element.type === 'opinionScale' && (
          <TextInput
            label="Min Value"
            type="number"
            value={element.min ?? ''}
            onChange={(e) => handleNumberChange('min', e.target.value)}
          />
        )}
        <TextInput
          label="Max Value"
          type="number"
          value={element.max ?? ''}
          onChange={(e) => handleNumberChange('max', e.target.value)}
        />
      </div>

      {/* Label inputs are only for opinionScale */}
      {element.type === 'opinionScale' && (
        <div className="space-y-4">
          <TextInput
            label="Min Label"
            value={element.minLabel || ''}
            onChange={(e) => updateElement(element.id, { minLabel: e.target.value })}
            placeholder="e.g., Disagree"
          />
          <TextInput
            label="Max Label"
            value={element.maxLabel || ''}
            onChange={(e) => updateElement(element.id, { maxLabel: e.target.value })}
            placeholder="e.g., Agree"
          />
        </div>
      )}
    </div>
  );
};

export default ScaleProperties;