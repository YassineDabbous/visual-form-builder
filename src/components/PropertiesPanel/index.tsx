import useFormStore from '../../store/formStore';
import type { FormElement } from '../../types/form';
import TextContentProperties from './TextContentProperties';
import InputProperties from './InputProperties';
import ChoiceProperties from './ChoiceProperties';
import ScaleProperties from './ScaleProperties'; // <-- Import
import PictureChoiceProperties from './PictureChoiceProperties'; // <-- Import

const PropertiesPanel = () => {
  const selectedElementId = useFormStore((state) => state.selectedElementId);
  const formDefinition = useFormStore((state) => state.formDefinition);

  const selectedElement = selectedElementId
    ? [
        ...(formDefinition.startSlide?.elements ?? []),
        ...formDefinition.slides.flatMap((slide) => slide.elements),
        ...(formDefinition.endSlide?.elements ?? []),
      ].find((el) => el.id === selectedElementId)
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
      // CONTENT
      case 'h1': case 'h2': case 'h3': case 'h4': case 'h5': case 'h6':
      case 'p': case 'blockquote':
        return <TextContentProperties element={element} />;
      
      // SIMPLE INPUTS
      case 'email': case 'text': case 'textarea': case 'password':
      case 'url': case 'tel': case 'number': case 'date':
      case 'time': case 'datetime': case 'file':
        return <InputProperties element={element} />;
      
      // CHOICE-BASED
      case 'select':
      case 'choice':
        return <ChoiceProperties element={element} />;
      
      case 'pictureChoice':
        return <PictureChoiceProperties element={element} />;

      // SCALES & RATINGS
      case 'rating':
      case 'opinionScale':
        return <ScaleProperties element={element} />;

      default:
        return <p className="text-sm text-gray-500">No properties editor available for type: <span className="font-semibold">{element.type}</span></p>;
    }
  };

  return (
    <aside className="w-80 bg-gray-100 p-4 border-l flex flex-col space-y-4 overflow-y-auto">
      <div>
        <h2 className="text-lg font-semibold mb-2">Properties</h2>
        <div className="text-sm bg-gray-200 p-2 rounded-md">
          <p className="flex justify-between"><span className="font-semibold">ID:</span> <span className="text-gray-600 truncate ml-2">{selectedElement.id}</span></p>
          <p className="flex justify-between"><span className="font-semibold">Type:</span> <span className="text-gray-600">{selectedElement.type}</span></p>
        </div>
      </div>
      
      <div className="flex-1">
        {renderProperties(selectedElement)}
      </div>
    </aside>
  );
};

export default PropertiesPanel;