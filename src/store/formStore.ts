import { create } from 'zustand';
import type { FormDefinition, FormElement, FormSlide } from '../types/form';
import { produce } from 'immer';
import { randomId } from '../lib/element-generator';

const LOCAL_STORAGE_KEY = 'formsmd_builder_save';

interface FormState {
  formDefinition: FormDefinition;
  selectedElementId: string | null;
  
  setFormDefinition: (definition: FormDefinition) => void;
  saveToLocalStorage: () => void;
  
  setSelectedElementId: (id: string | null) => void;
  updateElement: (elementId: string, newProps: Partial<FormElement>) => void; 
  addElement: (slideIndex: number, element: FormElement) => void;
  deleteElement: (elementId: string) => void;

  moveElement: (
    sourceSlideIndex: number,
    sourceElementIndex: number,
    destinationSlideIndex: number,
    destinationElementIndex: number
  ) => void;
  addElementFromToolbox: (slideIndex: number, destinationIndex: number, element: FormElement) => void;
  
  addSlide: () => void;
  deleteSlide: (slideIndex: number) => void;
}

const useFormStore = create<FormState>((set, get) => ({
  formDefinition: {
    id: 'new-form',
    postUrl: '/api/submit',
    slides: [
      {
        elements: [
          { id: randomId(), type: 'h1', text: 'My New Form' },
        ],
      },
    ],
  },
  selectedElementId: null,
  
  setFormDefinition: (definition) => {
    set({
      formDefinition: definition,
      selectedElementId: null,
    });
  },

  saveToLocalStorage: () => {
    const currentState = get();
    const jsonString = JSON.stringify(currentState.formDefinition);
    localStorage.setItem(LOCAL_STORAGE_KEY, jsonString);
  },

  setSelectedElementId: (id) => set({ selectedElementId: id }),

  deleteElement: (elementId) =>
    set(
      produce((state: FormState) => {
        if (state.selectedElementId === elementId) {
          state.selectedElementId = null;
        }

        for (const slide of state.formDefinition.slides) {
          const elementIndex = slide.elements.findIndex((el) => el.id === elementId);

          if (elementIndex !== -1) {
            slide.elements.splice(elementIndex, 1);
          }
        }
      })
    ),
  updateElement: (elementId, newProps) =>
    set(
      produce((state: FormState) => {
        let elementRef: FormElement | undefined;
        for (const slide of state.formDefinition.slides as FormSlide[]) {
          const element = slide.elements.find((el) => el.id === elementId);
          if (element) {
            elementRef = element;
            break;
          }
        }

        if (elementRef) {
          for (const key in newProps) {
            const propKey = key as keyof FormElement;
            const value = newProps[propKey];

            // If the value is an empty string or explicitly false,
            // delete the property to keep the JSON clean. Otherwise, set it.
            if (value === '' || value === false) {
              delete elementRef[propKey];
            } else {
              elementRef[propKey] = value;
            }
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



    
  addSlide: () =>
    set(
      produce((state: FormState) => {
        state.formDefinition.slides.push({
          elements: [],
        });
      })
    ),

  deleteSlide: (slideIndex) =>
    set(
      produce((state: FormState) => {
        if (state.formDefinition.slides.length > 1) {
          state.formDefinition.slides.splice(slideIndex, 1);
        } else {
          console.warn("Cannot delete the last slide.");
        }
      })
    ),
}));

export default useFormStore;