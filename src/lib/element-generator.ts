import type { FormElement } from "../types/form";

// Generates a short random string for uniqueness
const randomId = () => Math.random().toString(36).substring(2, 9);

// Generates a unique name, e.g., "email_f7h5r3g"
const generateElementName = (type: string) => `${type}_${randomId()}`;

export const generateElement = (type: string): FormElement => {
  const id = self.crypto.randomUUID();
  const baseElement: FormElement = { id, type };

  switch (type) {
    // Content Elements
    case 'h1': return { ...baseElement, text: 'New Heading' };
    case 'p': return { ...baseElement, text: 'New paragraph text.' };
    case 'hr': return baseElement;
    
    // Input Elements
    case 'text':
      return { ...baseElement, name: generateElementName(type), question: 'New Text Question', placeholder: 'Placeholder' };
    case 'email':
      return { ...baseElement, name: generateElementName(type), question: 'New Email Question', placeholder: 'name@example.com' };
    
    default:
      return baseElement;
  }
};