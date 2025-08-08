 
import useFormStore from '../../store/formStore';
import FormElementDisplay from './FormElementDisplay'; 
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';

const SortableFormElement = ({ element, slideIndex }: { element: any; slideIndex: number; }) => {
  const slides = useFormStore((state) => state.formDefinition.slides);
  const elementIndex = slides[slideIndex]?.elements.findIndex(el => el.id === element.id) ?? -1;

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: element.id,
    data: {
      element,
      type: element.type,
      isCanvasElement: true,
      slideIndex,
      elementIndex,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const selectedElementId = useFormStore((state) => state.selectedElementId);
  const setSelectedElementId = useFormStore((state) => state.setSelectedElementId);

  return (
    <div
      ref={setNodeRef}
      style={style}
      onClick={() => setSelectedElementId(element.id)}
      className={`
        p-1 rounded-lg transition-all flex items-center gap-2
        ${selectedElementId === element.id ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:bg-gray-100'}
      `}
    >
      <div {...attributes} {...listeners} className="p-2 cursor-grab touch-none">
        <GripVertical size={16} className="text-gray-400" />
      </div>
      <div className="flex-1">
        <FormElementDisplay element={element} />
      </div>
    </div>
  );
};

const Canvas = () => {
  const formDefinition = useFormStore((state) => state.formDefinition);

  return (
    <main className="flex-1 p-8 bg-gray-50 overflow-y-auto">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        {formDefinition.slides.map((slide, slideIndex) => (
          <SortableContext key={slideIndex} items={slide.elements.map(el => el.id)} strategy={verticalListSortingStrategy}>
            <div className="mb-8 p-4 border border-dashed rounded-lg min-h-[100px]">
              <span className="text-xs text-gray-400 mb-2 block">Slide {slideIndex + 1}</span>
              <div className="space-y-4">
                {slide.elements.map((element) => (
                  <SortableFormElement key={element.id} element={element} slideIndex={slideIndex} />
                ))}
              </div>
            </div>
          </SortableContext>
        ))}
      </div>
    </main>
  );
};

export default Canvas;