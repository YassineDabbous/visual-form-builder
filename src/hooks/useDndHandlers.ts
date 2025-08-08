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

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const isToolboxElement = active.data.current?.isToolboxElement;
    
    if (isToolboxElement) {
      // --- Case 1: Dragging a new element from the Toolbox ---
      const type = active.id as string;
      const { slideIndex, destinationIndex } = over.data.current || {};
      
      const newElement = generateElement(type);
      addElementFromToolbox(slideIndex, destinationIndex, newElement);

    } else {
      const { 
        slideIndex: sourceSlideIndex, 
        elementIndex: sourceElementIndex 
      } = active.data.current || {};
      
      const { 
        slideIndex: destinationSlideIndex, 
        elementIndex: destinationElementIndex 
      } = over.data.current || {};

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