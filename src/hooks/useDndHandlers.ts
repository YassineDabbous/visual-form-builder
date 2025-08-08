import type { DragEndEvent } from '@dnd-kit/core';
import useFormStore from '../store/formStore';
import type { FormElement } from '../types/form';

const generateElement = (type: string): FormElement => {
  const baseElement = { id: self.crypto.randomUUID(), type };
  switch (type) {
    case 'h1': return { ...baseElement, text: 'New Heading' };
    case 'p': return { ...baseElement, text: 'New paragraph text.' };
    case 'text': return { ...baseElement, question: 'New Text Question', placeholder: 'Placeholder' };
    case 'email': return { ...baseElement, question: 'New Email Question', placeholder: 'name@example.com' };
    default: return baseElement;
  }
};

export const useDndHandlers = () => {
  const moveElement = useFormStore((state) => state.moveElement);
  const addElementFromToolbox = useFormStore((state) => state.addElementFromToolbox);
  const setSelectedElementId = useFormStore((state) => state.setSelectedElementId);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const isToolboxElement = active.data.current?.isToolboxElement;

    if (isToolboxElement) {
      const type = active.id as string;
      const newElement = generateElement(type);
      
      const targetSlideIndex = over.data.current?.slideIndex;
      const isDroppingOnSlide = over.data.current?.isSlide;
      
      let destinationIndex = 0;
      if (isDroppingOnSlide) {
        destinationIndex = 0; 
      } else {
        destinationIndex = over.data.current?.elementIndex ?? 0;
      }

      if (targetSlideIndex !== undefined) {
        addElementFromToolbox(targetSlideIndex, destinationIndex, newElement);
        setSelectedElementId(newElement.id);
      }
      
    } else {
      const sourceSlideIndex = active.data.current?.slideIndex;
      const sourceElementIndex = active.data.current?.elementIndex;
      
      const destinationSlideIndex = over.data.current?.slideIndex;
      const isDroppingOnSlide = over.data.current?.isSlide;
      
      let destinationElementIndex = 0;
      if (isDroppingOnSlide) {
        destinationElementIndex = 0;
      } else {
        destinationElementIndex = over.data.current?.elementIndex ?? 0;
      }

      if (
        sourceSlideIndex !== undefined &&
        sourceElementIndex !== undefined &&
        destinationSlideIndex !== undefined &&
        destinationElementIndex !== undefined
      ) {
        moveElement(sourceSlideIndex, sourceElementIndex, destinationSlideIndex, destinationElementIndex);
      }
    }
  };

  return { handleDragEnd };
};