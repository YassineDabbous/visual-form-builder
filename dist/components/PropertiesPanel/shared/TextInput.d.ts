import { default as React } from 'react';
interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    description?: string;
}
declare const TextInput: ({ label, description, ...props }: TextInputProps) => import("react/jsx-runtime").JSX.Element;
export default TextInput;
//# sourceMappingURL=TextInput.d.ts.map