import type { FormDefinition, FormElement, FormSlide } from "../types/form";

export type SlideLocation = {
  slide: FormSlide;
  slideId: number | 'start' | 'end';
}

export type ElementLocation = {
  element: FormElement;
  elementIndex: number;
  slide: FormSlide;
  slideId: number | 'start' | 'end';
};

/**
 * Finds an element by its ID within the entire form definition.
 * @param formDefinition The root form definition object.
 * @param elementId The UUID of the element to find.
 * @returns An ElementLocation object or null if not found.
 */
export function findElementById(formDefinition: FormDefinition, elementId: string): ElementLocation | null {
  // Check start slide
  if (formDefinition.startSlide) {
    const elementIndex = formDefinition.startSlide.elements.findIndex(el => el.id === elementId);
    if (elementIndex !== -1) {
      return {
        element: formDefinition.startSlide.elements[elementIndex],
        elementIndex,
        slide: formDefinition.startSlide,
        slideId: 'start',
      };
    }
  }

  // Check main slides
  for (let i = 0; i < formDefinition.slides.length; i++) {
    const slide = formDefinition.slides[i];
    const elementIndex = slide.elements.findIndex(el => el.id === elementId);
    if (elementIndex !== -1) {
      return {
        element: slide.elements[elementIndex],
        elementIndex,
        slide: slide,
        slideId: i,
      };
    }
  }
  
  // Check end slide
  if (formDefinition.endSlide) {
    const elementIndex = formDefinition.endSlide.elements.findIndex(el => el.id === elementId);
    if (elementIndex !== -1) {
      return {
        element: formDefinition.endSlide.elements[elementIndex],
        elementIndex,
        slide: formDefinition.endSlide,
        slideId: 'end',
      };
    }
  }

  return null;
}

/**
 * Finds a slide by its ID ('start', 'end', or a numeric index).
 * @param formDefinition The root form definition object.
 * @param slideId The ID of the slide to find.
 * @returns A SlideLocation object or null if not found.
 */
export function findSlideById(formDefinition: FormDefinition, slideId: number | 'start' | 'end'): SlideLocation | null {
  if (slideId === 'start' && formDefinition.startSlide) {
    return { slide: formDefinition.startSlide, slideId: 'start' };
  }
  if (slideId === 'end' && formDefinition.endSlide) {
    return { slide: formDefinition.endSlide, slideId: 'end' };
  }
  if (typeof slideId === 'number' && formDefinition.slides[slideId]) {
    return { slide: formDefinition.slides[slideId], slideId };
  }
  return null;
}