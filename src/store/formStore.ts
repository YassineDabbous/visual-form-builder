import { create } from 'zustand';
import type { FormDefinition, FormElement, FormSlide } from '../types/form';
import { produce } from 'immer';
import { randomId } from '../lib/element-generator';

const LOCAL_STORAGE_KEY = 'formsmd_builder_save';

interface FormState {
  formDefinition: FormDefinition;
  selectedElementId: string | null;
  selectedSlideIndex: number | null | 'start' | 'end';
  
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
  
  setSelectedSlideIndex: (index: number | null | 'start' | 'end') => void;
  updateFormSettings: (newSettings: { [key: string]: any }) => void;
  updateSlideSettings: (slideIndex: number | 'start' | 'end', newOptions: { [key: string]: any }) => void;
}

const useFormStore = create<FormState>((set, get) => ({
  formDefinition: {
    settings: {
      id: 'my-awesome-form',
      postUrl: '/api/submit',
    },
    options: {},  // Initialize as empty object
    slides: [
      {
        elements: [
          // Add a default element for demonstration
          { id: randomId(), type: 'h1', text: 'My New Form' }
        ],
      },
    ],
  },
  selectedElementId: null,
  selectedSlideIndex: null,

  // --- ACTION IMPLEMENTATIONS ---
  setSelectedElementId: (id) => {
    set({ selectedElementId: id, selectedSlideIndex: null });
  },

  setSelectedSlideIndex: (index) => {
    set({ selectedSlideIndex: index, selectedElementId: null });
  },
  
  updateFormSettings: (newSettings) =>
    set(
      produce((state: FormState) => {
        state.formDefinition.settings = { ...state.formDefinition.settings, ...newSettings };
      })
    ),

  updateSlideSettings: (slideIndex, newOptions) =>
    set(
      produce((state: FormState) => {
        let targetSlide: FormSlide | undefined;
        if (slideIndex === 'start') {
          if (!state.formDefinition.startSlide) state.formDefinition.startSlide = { elements: [] };
          targetSlide = state.formDefinition.startSlide;
        } else if (slideIndex === 'end') {
          if (!state.formDefinition.endSlide) state.formDefinition.endSlide = { elements: [] };
          targetSlide = state.formDefinition.endSlide;
        } else if (state.formDefinition.slides[slideIndex]) {
          targetSlide = state.formDefinition.slides[slideIndex];
        }

        if (targetSlide) {
          targetSlide.slideOptions = { ...(targetSlide.slideOptions || {}), ...newOptions };
        }
      })
    ),
  
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