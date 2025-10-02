import { default as React } from 'react';
import { FormElement } from '../../../types/form';
interface SharedPropertiesProps {
    element: FormElement;
}
export declare const BooleanToggle: ({ label, description, checked, onChange, }: {
    label: string;
    description?: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => import("react/jsx-runtime").JSX.Element;
declare const SharedProperties: ({ element }: SharedPropertiesProps) => import("react/jsx-runtime").JSX.Element;
export default SharedProperties;
//# sourceMappingURL=SharedProperties.d.ts.map