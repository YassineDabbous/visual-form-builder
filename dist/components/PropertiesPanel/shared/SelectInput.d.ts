import { default as React } from 'react';
interface SelectInputProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    description?: string;
    children: React.ReactNode;
}
export declare const SelectInput: ({ label, description, children, ...props }: SelectInputProps) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=SelectInput.d.ts.map