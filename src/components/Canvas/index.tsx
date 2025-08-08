import React from 'react';
import useFormStore from '../../store/formStore';
import FormElementDisplay from './FormElementDisplay';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Trash2 } from 'lucide-react';

const SortableFormElement = ({ element, slideIndex }: { element: any; slideIndex: number; }) => {
  const slides = useFormStore((state) => state.formDefinition.slides);
  const elementIndex = slides[slideIndex]?.elements.findIndex(el => el.id === element.id) ?? -1;

  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: element.id,
    data: { element, type: element.type, isCanvasElement: true, slideIndex, elementIndex },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const selectedElementId = useFormStore((state) => state.selectedElementId);
  const setSelectedElementId = useFormStore((state) => state.setSelectedElementId);
  const deleteElement = useFormStore((state) => state.deleteElement);

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this element?')) {
      deleteElement(element.id);
    }
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      onClick={() => setSelectedElementId(element.id)}
      className={`group p-1 rounded-lg transition-all flex items-center gap-2 ${
        selectedElementId === element.id ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:bg-gray-100'
      }`}
    >
      <div {...attributes} {...listeners} className="p-2 cursor-grab touch-none">
        <GripVertical size={16} className="text-gray-400" />
      </div>
      <div className="flex-1">
        <FormElementDisplay element={element} />
      </div>
      <button
        onClick={handleDelete}
        className="p-1 text-gray-400 opacity-0 group-hover:opacity-100 hover:text-red-600 transition-all"
        aria-label="Delete element"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
};

const SlideContainer = ({ slide, slideIndex }: { slide: any; slideIndex: number }) => {
  const deleteSlide = useFormStore((state) => state.deleteSlide);
  const { setNodeRef } = useDroppable({ id: `slide-${slideIndex}`, data: { slideIndex, isSlide: true } });

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete Slide ${slideIndex + 1}?`)) {
      deleteSlide(slideIndex);
    }
  };

  return (
    <SortableContext items={slide.elements.map((el: any) => el.id)} strategy={verticalListSortingStrategy}>
      <div className="mb-8 p-4 border border-dashed rounded-lg bg-white shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-500 font-semibold tracking-wider">Slide {slideIndex + 1}</span>
          <button onClick={handleDelete} className="p-1 text-gray-400 hover:text-red-600 transition-colors">
            <Trash2 size={16} />
          </button>
        </div>
        <div ref={setNodeRef} className="space-y-4 min-h-[100px] p-4 bg-gray-50 rounded-md">
          {slide.elements.map((element: any) => (
            <SortableFormElement key={element.id} element={element} slideIndex={slideIndex} />
          ))}
          {slide.elements.length === 0 && (
            <div className="flex justify-center items-center text-sm text-gray-400 h-[80px]">
              Drop elements here
            </div>
          )}
        </div>
      </div>
    </SortableContext>
  );
};

const Canvas = () => {
  const formDefinition = useFormStore((state) => state.formDefinition);
  const addSlide = useFormStore((state) => state.addSlide);

  return (
    <main className="flex-1 p-8 bg-gray-100 overflow-y-auto">
      <div className="max-w-3xl mx-auto">
        {formDefinition.slides.map((slide, slideIndex) => (
          <SlideContainer key={slideIndex} slide={slide} slideIndex={slideIndex} />
        ))}
        <div className="flex justify-center mt-4">
          <button
            onClick={addSlide}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            + Add New Slide
          </button>
        </div>
      </div>
    </main>
  );
};

export default Canvas;