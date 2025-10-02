import { FormDefinition } from '../types/form';
/**
 * Checks if a given name is unique across all elements in the form.
 * @param name The name to check.
 * @param elementId The ID of the element currently being edited, to exclude it from the check.
 * @param formDefinition The entire form definition object.
 * @returns True if the name is unique, false otherwise.
 */
export declare const isNameUnique: (name: string, elementId: string, formDefinition: FormDefinition) => boolean;
//# sourceMappingURL=validation.d.ts.map