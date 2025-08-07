import useFormStore from '../../store/formStore';
import type { FormElement } from '../../types/form';
import TextContentProperties from './TextContentProperties'; 
import InputProperties from './InputProperties';

const PropertiesPanel = () => {
  const selectedElementId = useFormStore((state) => state.selectedElementId);
  const formDefinition = useFormStore((state) => state.formDefinition);

  const selectedElement = selectedElementId
    ? formDefinition.slides
        .flatMap((slide) => slide.elements)
        .find((el) => el.id === selectedElementId)
    : null;

  if (!selectedElement) {
    return (
      <aside className="w-80 bg-gray-100 p-4 border-l">
        <div className="flex justify-center items-center h-full">
          <p className="text-gray-500">Select an element to see its properties</p>
        </div>
      </aside>
    );
  }

  const renderProperties = (element: FormElement) => {
    switch (element.type) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
      case 'p':
        return <TextContentProperties element={element} />;

      case 'email':
      case 'text':
      case 'password':
      case 'url':
      case 'tel':
        return <InputProperties element={element} />;

      default:
        return <p>No properties editor for type: {element.type}</p>;
    }
  };

  return (
    <aside className="w-80 bg-gray-100 p-4 border-l flex flex-col space-y-4">
      <div>
        <h2 className="text-lg font-semibold mb-2">Properties</h2>
        <div className="text-sm bg-gray-200 p-2 rounded-md">
          <p><span className="font-semibold">ID:</span> <span className="text-gray-600 truncate">{selectedElement.id}</span></p>
          <p><span className="font-semibold">Type:</span> <span className="text-gray-600">{selectedElement.type}</span></p>
        </div>
      </div>
      
      <div className="flex-1">
        {renderProperties(selectedElement)}
      </div>
    </aside>
  );
};

export default PropertiesPanel;