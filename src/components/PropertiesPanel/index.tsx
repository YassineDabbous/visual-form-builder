import useFormStore from '../../store/formStore';
import type { FormElement, FormSlide } from '../../types/form';
import TextContentProperties from './TextContentProperties';
import InputProperties from './InputProperties';
import ChoiceProperties from './ChoiceProperties';
import ScaleProperties from './ScaleProperties';
import PictureChoiceProperties from './PictureChoiceProperties';
import ListProperties from './ListProperties';
import CodeProperties from './CodeProperties';
import FormSettings from './FormSettings';
import SlideSettings from './SlideSettings';

const ElementProperties = ({ selectedElement }: { selectedElement: FormElement }) => {
  const renderProperties = (element: FormElement) => {
    switch (element.type) {
      case 'h1': case 'h2': case 'h3': case 'h4': case 'h5': case 'h6':
      case 'p': case 'blockquote':
        return <TextContentProperties element={element} />;
      case 'ul': case 'ol':
        return <ListProperties element={element} />;
      case 'code':
        return <CodeProperties element={element} />;
      case 'email': case 'text': case 'textarea': case 'password':
      case 'url': case 'tel': case 'number': case 'date':
      case 'time': case 'datetime': case 'file':
        return <InputProperties element={element} />;
      case 'select': case 'choice':
        return <ChoiceProperties element={element} />;
      case 'pictureChoice':
        return <PictureChoiceProperties element={element} />;
      case 'rating': case 'opinionScale':
        return <ScaleProperties element={element} />;
      default:
        return <p className="text-sm text-gray-500">No properties editor available for type: <span className="font-semibold">{element.type}</span></p>;
    }
  };

  return (
    <aside className="w-80 bg-gray-100 p-4 border-l flex flex-col space-y-4 overflow-y-auto">
      <div>
        <h2 className="text-lg font-semibold mb-2">Element Properties</h2>
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

const PropertiesPanelWrapper = () => {
  const selectedElementId = useFormStore((state) => state.selectedElementId);
  const selectedSlideIndex = useFormStore((state) => state.selectedSlideIndex);
  const formDefinition = useFormStore((state) => state.formDefinition);

  if (selectedElementId) {
    const selectedElement = [
        ...(formDefinition.startSlide?.elements ?? []),
        ...formDefinition.slides.flatMap((slide) => slide.elements),
        ...(formDefinition.endSlide?.elements ?? []),
      ].find((el) => el.id === selectedElementId);
    
    return selectedElement ? <ElementProperties selectedElement={selectedElement} /> : <FormSettings />;
  }

  if (selectedSlideIndex !== null) {
    let selectedSlide: FormSlide | undefined;
    if (selectedSlideIndex === 'start') {
      selectedSlide = formDefinition.startSlide ?? { elements: [] };
    } else if (selectedSlideIndex === 'end') {
      selectedSlide = formDefinition.endSlide ?? { elements: [] };
    } else {
      selectedSlide = formDefinition.slides[selectedSlideIndex];
    }

    return selectedSlide ? <SlideSettings slide={selectedSlide} slideIndex={selectedSlideIndex} /> : <FormSettings />;
  }

  return <FormSettings />;
};

export default PropertiesPanelWrapper;