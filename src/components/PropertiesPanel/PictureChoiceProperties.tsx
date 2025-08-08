import type { FormElement } from '../../types/form';
import useFormStore from '../../store/formStore';
import TextInput from './shared/TextInput';
import { PlusCircle, Trash2 } from 'lucide-react';

interface PictureChoice {
  label: string;
  value: string;
  image: string;
}

interface PictureChoicePropertiesProps {
  element: FormElement;
}

const PictureChoiceProperties = ({ element }: PictureChoicePropertiesProps) => {
  const updateElement = useFormStore((state) => state.updateElement);
  const choices: PictureChoice[] = element.choices || [];

  const handlePropertyChange = (index: number, prop: keyof PictureChoice, value: string) => {
    const newChoices = [...choices];
    newChoices[index] = { ...newChoices[index], [prop]: value };
    updateElement(element.id, { choices: newChoices });
  };

  const addChoice = () => {
    const newChoice: PictureChoice = {
      label: `New Label ${choices.length + 1}`,
      value: `new_value_${choices.length + 1}`,
      image: 'https://img.icons8.com/clouds/200/help.png',
    };
    updateElement(element.id, { choices: [...choices, newChoice] });
  };

  const removeChoice = (index: number) => {
    const newChoices = [...choices];
    newChoices.splice(index, 1);
    updateElement(element.id, { choices: newChoices });
  };

  return (
    <div className="space-y-4">
      <TextInput
        label="Question"
        value={element.question || ''}
        onChange={(e) => updateElement(element.id, { question: e.target.value })}
      />
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Picture Options</label>
        <div className="space-y-3">
          {choices.map((choice, index) => (
            <div key={index} className="p-3 border rounded-lg space-y-2 bg-gray-50 relative">
               <button onClick={() => removeChoice(index)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
                <Trash2 size={16} />
              </button>
              <TextInput label="Label" value={choice.label} onChange={(e) => handlePropertyChange(index, 'label', e.target.value)} />
              <TextInput label="Value" value={choice.value} onChange={(e) => handlePropertyChange(index, 'value', e.target.value)} />
              <TextInput label="Image URL" value={choice.image} onChange={(e) => handlePropertyChange(index, 'image', e.target.value)} />
            </div>
          ))}
          <button onClick={addChoice} className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 pt-2">
            <PlusCircle size={16} />
            Add Picture Option
          </button>
        </div>
      </div>
    </div>
  );
};

export default PictureChoiceProperties;