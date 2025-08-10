import type { DragEndEvent } from '@dnd-kit/core';
import useFormStore from '../store/formStore';
import { generateElement } from '../lib/element-generator';

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
      
      const overIsSlide = over.data.current?.isSlide;
      const overSlideId = over.data.current?.slideIndex;
      let destIndex = 0;
      if (!overIsSlide) {
        // Dropping on an element
        destIndex = over.data.current?.elementIndex ?? 0;
      }

      if (overSlideId !== undefined) {
        addElementFromToolbox(overSlideId, destIndex, newElement);
        setSelectedElementId(newElement.id);
      }
    } else { // Reordering an existing element
      const activeElementId = active.id as string;
      const overElementId = over.id as string;
      
      // If we dropped on the same element, do nothing
      if (activeElementId === overElementId) return;
      
      const overIsSlide = over.data.current?.isSlide;
      const overSlideId = over.data.current?.slideIndex;
      
      if (overSlideId !== undefined) {
        moveElement(activeElementId, overIsSlide ? null : overElementId, overSlideId);
      }
    }
  };

  return { handleDragEnd };
};