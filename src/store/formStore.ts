import { create } from "zustand";
import { temporal, type TemporalState } from "zundo";
import type { FormDefinition, FormElement } from "../types/form";
import { produce } from "immer";
import { randomId } from "../lib/element-generator";
import { findElementById, findSlideById } from "../lib/element-finder";
import { useStoreWithEqualityFn } from "zustand/traditional";

const LOCAL_STORAGE_KEY = "formsmd_builder_save";

interface FormState {
  formDefinition: FormDefinition;
  selectedElementId: string | null;
  selectedSlideIndex: number | null | "start" | "end";

  setFormDefinition: (definition: FormDefinition) => void;
  saveToLocalStorage: () => void;

  setSelectedElementId: (id: string | null) => void;
  updateElement: (elementId: string, newProps: Partial<FormElement>) => void;
  deleteElement: (elementId: string) => void;
  moveElement: (
    activeElementId: string,
    overElementId: string | null,
    overSlideId: number | "start" | "end"
  ) => void;
  addElementFromToolbox: (
    slideId: number | "start" | "end",
    destinationIndex: number,
    element: FormElement
  ) => void;
  addSlide: () => void;
  deleteSlide: (slideIndex: number) => void;

  setSelectedSlideIndex: (index: number | null | "start" | "end") => void;
  updateFormSettings: (newSettings: { [key: string]: any }) => void;
  updateSlideSettings: (
    slideIndex: number | "start" | "end",
    newOptions: { [key: string]: any }
  ) => void;
  toggleStartSlide: (enabled: boolean) => void;
  toggleEndSlide: (enabled: boolean) => void;
}

export function useTemporalStore(): TemporalState<FormState>;
export function useTemporalStore<T>(selector: (state: TemporalState<FormState>) => T): T;
export function useTemporalStore<T>(
  selector: (state: TemporalState<FormState>) => T,
  equality: (a: T, b: T) => boolean,
): T;
export function useTemporalStore<T>(
  selector?: (state: TemporalState<FormState>) => T,
  equality?: (a: T, b: T) => boolean,
) {
  return useStoreWithEqualityFn(useFormStore.temporal, selector!, equality);
}

const useFormStore = create(
  temporal<FormState>(
    (set, get) => ({
      formDefinition: {
        settings: { id: "my-awesome-form", postUrl: "/api/submit" },
        options: {},
        slides: [
          { elements: [{ id: randomId(), type: "h1", text: "My New Form" }] },
        ],
      },
      selectedElementId: null,
      selectedSlideIndex: null,

      // --- ACTIONS ---
      setSelectedElementId: (id) =>
        set({ selectedElementId: id, selectedSlideIndex: null }),
      setSelectedSlideIndex: (index) =>
        set({ selectedSlideIndex: index, selectedElementId: null }),

      updateFormSettings: (newSettings) =>
        set(
          produce((state: FormState) => {
            state.formDefinition.settings = {
              ...state.formDefinition.settings,
              ...newSettings,
            };
          })
        ),

      updateSlideSettings: (slideIndex, newOptions) =>
        set(
          produce((state: FormState) => {
            const location = findSlideById(state.formDefinition, slideIndex);
            if (location) {
              location.slide.slideOptions = {
                ...(location.slide.slideOptions || {}),
                ...newOptions,
              };
            }
          })
        ),

      toggleStartSlide: (enabled) =>
        set(
          produce((state: FormState) => {
            if (enabled) {
              if (!state.formDefinition.startSlide) {
                state.formDefinition.startSlide = {
                  elements: [
                    {
                      id: self.crypto.randomUUID(),
                      type: "h1",
                      text: "Welcome!",
                    },
                  ],
                };
              }
            } else {
              delete state.formDefinition.startSlide;
              if (state.selectedSlideIndex === "start")
                state.selectedSlideIndex = null;
            }
          })
        ),

      toggleEndSlide: (enabled) =>
        set(
          produce((state: FormState) => {
            if (enabled) {
              if (!state.formDefinition.endSlide) {
                state.formDefinition.endSlide = {
                  elements: [
                    {
                      id: self.crypto.randomUUID(),
                      type: "h1",
                      text: "Thank You!",
                    },
                  ],
                };
              }
            } else {
              delete state.formDefinition.endSlide;
              if (state.selectedSlideIndex === "end")
                state.selectedSlideIndex = null;
            }
          })
        ),

      setFormDefinition: (definition) =>
        set({
          formDefinition: definition,
          selectedElementId: null,
          selectedSlideIndex: null,
        }),

      saveToLocalStorage: () => {
        const currentState = get();
        localStorage.setItem(
          LOCAL_STORAGE_KEY,
          JSON.stringify(currentState.formDefinition)
        );
      },

      updateElement: (elementId, newProps) =>
        set(
          produce((state: FormState) => {
            const location = findElementById(state.formDefinition, elementId);
            if (location) {
              for (const key in newProps) {
                const propKey = key as keyof FormElement;
                const value = newProps[propKey];
                if (value === "" || value === false) {
                  delete location.element[propKey];
                } else {
                  location.element[propKey] = value;
                }
              }
            }
          })
        ),

      deleteElement: (elementId) =>
        set(
          produce((state: FormState) => {
            if (state.selectedElementId === elementId)
              state.selectedElementId = null;
            const location = findElementById(state.formDefinition, elementId);
            if (location) {
              location.slide.elements.splice(location.elementIndex, 1);
            }
          })
        ),

      moveElement: (activeElementId, overElementId, overSlideId) =>
        set(
          produce((state: FormState) => {
            const sourceLocation = findElementById(
              state.formDefinition,
              activeElementId
            );
            if (!sourceLocation) return;

            const [movedElement] = sourceLocation.slide.elements.splice(
              sourceLocation.elementIndex,
              1
            );
            if (!movedElement) return;

            const destSlideLocation = findSlideById(
              state.formDefinition,
              overSlideId
            );
            if (!destSlideLocation) return;

            let destIndex: number;
            if (overElementId) {
              const overLocation = findElementById(
                state.formDefinition,
                overElementId
              );
              destIndex = overLocation
                ? overLocation.elementIndex
                : destSlideLocation.slide.elements.length;
            } else {
              destIndex = destSlideLocation.slide.elements.length;
            }

            destSlideLocation.slide.elements.splice(destIndex, 0, movedElement);
          })
        ),

      addElementFromToolbox: (slideId, destinationIndex, element) =>
        set(
          produce((state: FormState) => {
            const location = findSlideById(state.formDefinition, slideId);
            if (location) {
              location.slide.elements.splice(destinationIndex, 0, element);
            }
          })
        ),

      addSlide: () =>
        set(
          produce((state: FormState) => {
            state.formDefinition.slides.push({ elements: [] });
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
    }
    ),
    {
      equality: (currentState, pastState) =>
        JSON.stringify(currentState.formDefinition) ===
        JSON.stringify(pastState.formDefinition),
    }
  )
);

export default useFormStore;