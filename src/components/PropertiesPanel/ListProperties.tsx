import type { FormElement } from '../../types/form';
import useFormStore from '../../store/formStore';
import { PlusCircle, Trash2 } from 'lucide-react';

interface ListPropertiesProps {
  element: FormElement;
}

const ListProperties = ({ element }: ListPropertiesProps) => {
  const updateElement = useFormStore((state) => state.updateElement);
  const items: string[] = element.items || [];

  const handleItemChange = (index: number, value: string) => {
    const newItems = [...items];
    newItems[index] = value;
    updateElement(element.id, { items: newItems });
  };

  const addItem = () => {
    const newItems = [...items, `New Item ${items.length + 1}`];
    updateElement(element.id, { items: newItems });
  };

  const removeItem = (index: number) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    updateElement(element.id, { items: newItems.length > 0 ? newItems : undefined });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">List Items</label>
        <div className="space-y-2 p-3 border rounded-lg bg-gray-50/50">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="text"
                value={item}
                onChange={(e) => handleItemChange(index, e.target.value)}
                className="flex-grow p-2 border border-gray-300 rounded-md shadow-sm"
                placeholder={`Item ${index + 1}`}
              />
              <button onClick={() => removeItem(index)} className="text-gray-400 hover:text-red-500">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
          <button onClick={addItem} className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800">
            <PlusCircle size={16} />
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListProperties;