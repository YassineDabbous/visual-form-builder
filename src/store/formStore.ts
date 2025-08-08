import { create } from 'zustand';
import type { FormDefinition, FormElement, FormSlide } from '../types/form';
import { produce } from 'immer';


const generateId = () => self.crypto.randomUUID();

interface FormState {
  formDefinition: FormDefinition;
  selectedElementId: string | null;
  
  setSelectedElementId: (id: string | null) => void;
  updateElement: (elementId: string, newProps: Partial<FormElement>) => void; 
  addElement: (slideIndex: number, element: FormElement) => void;

  moveElement: (
    sourceSlideIndex: number,
    sourceElementIndex: number,
    destinationSlideIndex: number,
    destinationElementIndex: number
  ) => void;
  addElementFromToolbox: (slideIndex: number, destinationIndex: number, element: FormElement) => void;
}

const useFormStore = create<FormState>((set) => ({
  formDefinition: {
    id: 'new-form',
    postUrl: '/api/submit',
    slides: [
      {
        elements: [
          { id: generateId(), type: 'h1', text: 'My New Form' },
        ],
      },
    ],
  },
  selectedElementId: null,

  setSelectedElementId: (id) => set({ selectedElementId: id }),

  updateElement: (elementId, newProps) =>
    set(
      produce((state: FormState) => {
        for (const slide of (state.formDefinition.slides as FormSlide[])) {
          const elementIndex = slide.elements.findIndex((el) => el.id === elementId);
          if (elementIndex !== -1) {
            slide.elements[elementIndex] = {
              ...slide.elements[elementIndex],
              ...newProps,
            };
            return;
          }
        }
      })
    ),
  addElement: (slideIndex, element) =>
    set(
      produce((state: FormState) => {
        if (state.formDefinition.slides[slideIndex]) {
          state.formDefinition.slides[slideIndex].elements.push(element);
        }
      })
    ),

    
  moveElement: (sourceSlideIndex, sourceElementIndex, destinationSlideIndex, destinationElementIndex) =>
    set(
      produce((state: FormState) => {
        const sourceSlide = state.formDefinition.slides[sourceSlideIndex];
        const destinationSlide = state.formDefinition.slides[destinationSlideIndex];

        if (!sourceSlide || !destinationSlide) return;

        const [movedElement] = sourceSlide.elements.splice(sourceElementIndex, 1);

        if (movedElement) {
          destinationSlide.elements.splice(destinationElementIndex, 0, movedElement);
        }
      })
    ),

  addElementFromToolbox: (slideIndex, destinationIndex, element) =>
    set(
      produce((state: FormState) => {
        const slide = state.formDefinition.slides[slideIndex];
        if (slide) {
          slide.elements.splice(destinationIndex, 0, element);
        }
      })
    ),
}));

export default useFormStore;