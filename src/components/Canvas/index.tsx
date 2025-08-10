import React from 'react';
import useFormStore from '../../store/formStore';
import FormElementDisplay from './FormElementDisplay';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical, Trash2, Settings, PlayCircle, StopCircle } from 'lucide-react';

const SortableFormElement = ({ element, slideIndex }: { element: any; slideIndex: number | 'start' | 'end'; }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: element.id,
    data: { isCanvasElement: true, slideIndex: slideIndex, },
  });

  const style = { transform: CSS.Transform.toString(transform), transition };
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
    <div ref={setNodeRef} style={style} onClick={() => setSelectedElementId(element.id)} className={`group p-1 rounded-lg transition-all flex items-center gap-2 ${selectedElementId === element.id ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:bg-gray-100'}`}>
      <div {...attributes} {...listeners} className="p-2 cursor-grab touch-none"><GripVertical size={16} className="text-gray-400" /></div>
      <div className="flex-1"><FormElementDisplay element={element} /></div>
      <button onClick={handleDelete} className="p-1 text-gray-400 opacity-0 group-hover:opacity-100 hover:text-red-600 transition-all" aria-label="Delete element"><Trash2 size={16} /></button>
    </div>
  );
};

const SlideContainer = ({ slide, slideIndex, isSpecial = false, title, icon }: { slide: any; slideIndex: number | 'start' | 'end'; isSpecial?: boolean; title: string; icon: React.ReactNode }) => {
  const deleteSlide = useFormStore((state) => state.deleteSlide);
  const setSelectedSlideIndex = useFormStore((state) => state.setSelectedSlideIndex);
  const selectedSlideIndex = useFormStore((state) => state.selectedSlideIndex);
  const { setNodeRef } = useDroppable({ id: `slide-${slideIndex}`, data: { slideIndex, isSlide: true } });

  const isSelected = selectedSlideIndex === slideIndex;

  const handleDelete = () => {
    if (typeof slideIndex === 'number' && window.confirm(`Are you sure you want to delete Slide ${slideIndex + 1}?`)) {
      deleteSlide(slideIndex);
    }
  };

  return (
    <SortableContext items={slide.elements.map((el: any) => el.id)} strategy={verticalListSortingStrategy}>
      <div className={`mb-8 p-4 border rounded-lg shadow-sm transition-all ${isSelected ? 'border-blue-500 ring-2 ring-blue-200' : 'border-dashed'} ${isSpecial ? 'bg-indigo-50 border-indigo-200' : 'bg-white'}`}>
        <div className="flex justify-between items-center mb-4">
          <div className={`flex items-center gap-2 text-sm font-semibold tracking-wider ${isSpecial ? 'text-indigo-700' : 'text-gray-500'}`}>
            {icon}
            <span>{title}</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setSelectedSlideIndex(slideIndex)} className={`p-1 text-gray-400 hover:text-blue-600 transition-colors ${isSelected ? 'text-blue-600' : ''}`}>
              <Settings size={16} />
            </button>
            { !isSpecial && ( <button onClick={handleDelete} className="p-1 text-gray-400 hover:text-red-600 transition-colors">
              <Trash2 size={16} />
              </button> )}
          </div>
        </div>
        <div ref={setNodeRef} className="space-y-4 min-h-[100px] p-4 bg-white rounded-md">
          {slide.elements.map((element: any) => (
            <SortableFormElement key={element.id} element={element} slideIndex={slideIndex} />
          ))}
          {slide.elements.length === 0 && ( <div className="flex justify-center items-center text-sm text-gray-400 h-[80px]">Drop elements here</div> )}
        </div>
      </div>
    </SortableContext>
  );
};

const Canvas = () => {
  const formDefinition = useFormStore((state) => state.formDefinition);
  const addSlide = useFormStore((state) => state.addSlide);
  const setSelectedElementId = useFormStore((state) => state.setSelectedElementId);
  const setSelectedSlideIndex = useFormStore((state) => state.setSelectedSlideIndex);

  const handleCanvasClick = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      setSelectedElementId(null);
      setSelectedSlideIndex(null);
    }
  };

  return (
    <main onClick={handleCanvasClick} className="flex-1 p-8 bg-gray-100 overflow-y-auto cursor-pointer">
      <div className="max-w-3xl mx-auto cursor-default">
        {formDefinition.startSlide && ( <SlideContainer slide={formDefinition.startSlide} slideIndex="start" isSpecial={true} title="Welcome Slide" icon={<PlayCircle size={16}/>} /> )}
        {formDefinition.slides.map((slide, slideIndex) => ( <SlideContainer key={slideIndex} slide={slide} slideIndex={slideIndex} title={`Slide ${slideIndex + 1}`} icon={<></>} /> ))}
        {formDefinition.endSlide && ( <SlideContainer slide={formDefinition.endSlide} slideIndex="end" isSpecial={true} title="End Slide" icon={<StopCircle size={16}/>} /> )}
        <div className="flex justify-center mt-4">
          <button onClick={addSlide} className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">+ Add New Slide</button>
        </div>
      </div>
    </main>
  );
};

export default Canvas;