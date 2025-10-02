import { FormDefinition } from './types/form';
export interface FormBuilderProps {
    initialData?: FormDefinition;
    onSave: (data: FormDefinition) => Promise<string | null>;
    onLoad?: () => Promise<FormDefinition>;
}
export declare const FormBuilder: ({ initialData, onSave, onLoad }: FormBuilderProps) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=FormBuilder.d.ts.map