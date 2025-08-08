import type { FormElement } from '../../types/form';
import useFormStore from '../../store/formStore';
import TextInput from './shared/TextInput';

interface TextContentPropertiesProps {
  element: FormElement;
}

const TextContentProperties = ({ element }: TextContentPropertiesProps) => {
  const updateElement = useFormStore((state) => state.updateElement);

  const isHeading = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(element.type);

  const handleTypeChange = (newType: string) => {
    updateElement(element.id, { type: newType });
  };

  const HeadingLevelButton = ({ level }: { level: number }) => {
    const type = `h${level}`;
    const isActive = element.type === type;
    return (
      <button
        onClick={() => handleTypeChange(type)}
        className={`px-3 py-1 text-sm font-bold rounded-md transition-colors ${
          isActive
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        H{level}
      </button>
    );
  };

  return (
    <div className="space-y-4">
      {isHeading && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
          <div className="flex flex-wrap items-center gap-2">
            <HeadingLevelButton level={1} />
            <HeadingLevelButton level={2} />
            <HeadingLevelButton level={3} />
            <HeadingLevelButton level={4} />
            <HeadingLevelButton level={5} />
            <HeadingLevelButton level={6} />
          </div>
        </div>
      )}

      <TextInput
        label="Text Content"
        value={element.text || ''}
        onChange={(e) => updateElement(element.id, { text: e.target.value })}
      />
    </div>
  );
};

export default TextContentProperties;