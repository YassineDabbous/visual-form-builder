import { FormDefinition, FormElement, FormSlide } from '../types/form';
export type SlideLocation = {
    slide: FormSlide;
    slideId: number | 'start' | 'end';
};
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
export declare function findElementById(formDefinition: FormDefinition, elementId: string): ElementLocation | null;
/**
 * Finds a slide by its ID ('start', 'end', or a numeric index).
 * @param formDefinition The root form definition object.
 * @param slideId The ID of the slide to find.
 * @returns A SlideLocation object or null if not found.
 */
export declare function findSlideById(formDefinition: FormDefinition, slideId: number | 'start' | 'end'): SlideLocation | null;
//# sourceMappingURL=element-finder.d.ts.map