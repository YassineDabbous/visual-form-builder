import { TemporalState } from 'zundo';
import { FormDefinition, FormElement } from '../types/form';
export interface ExamValidationError {
    elementId: string;
    message: string;
}
interface FormState {
    formDefinition: FormDefinition;
    selectedElementId: string | null;
    selectedSlideIndex: number | null | "start" | "end";
    examValidationErrors: ExamValidationError[];
    setFormDefinition: (definition: FormDefinition) => void;
    setExamValidationErrors: (errors: ExamValidationError[]) => void;
    saveToLocalStorage: () => void;
    setSelectedElementId: (id: string | null) => void;
    updateElement: (elementId: string, newProps: Partial<FormElement>) => void;
    deleteElement: (elementId: string) => void;
    moveElement: (activeElementId: string, overElementId: string | null, overSlideId: number | "start" | "end") => void;
    addElementFromToolbox: (slideId: number | "start" | "end", destinationIndex: number, element: FormElement) => void;
    addSlide: () => void;
    deleteSlide: (slideIndex: number) => void;
    setSelectedSlideIndex: (index: number | null | "start" | "end") => void;
    updateFormSettings: (newSettings: {
        [key: string]: any;
    }) => void;
    updateSlideSettings: (slideIndex: number | "start" | "end", newOptions: {
        [key: string]: any;
    }) => void;
    toggleStartSlide: (enabled: boolean) => void;
    toggleEndSlide: (enabled: boolean) => void;
}
export declare function useTemporalStore(): TemporalState<FormState>;
export declare function useTemporalStore<T>(selector: (state: TemporalState<FormState>) => T): T;
export declare function useTemporalStore<T>(selector: (state: TemporalState<FormState>) => T, equality: (a: T, b: T) => boolean): T;
declare const useFormStore: import('zustand').UseBoundStore<Omit<import('zustand').StoreApi<FormState>, "temporal"> & {
    temporal: import('zustand').StoreApi<TemporalState<FormState>>;
}>;
export default useFormStore;
//# sourceMappingURL=formStore.d.ts.map