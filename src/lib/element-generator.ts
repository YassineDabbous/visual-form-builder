import type { FormElement } from "../types/form";

export const randomId = () => Math.random().toString(36).substring(2, 9);
const generateElementName = (type: string) => `${type}_${randomId()}`;

export const generateElement = (type: string): FormElement => {
  const id = self.crypto.randomUUID();
  const baseElement: FormElement = { id, type };

  switch (type) {
    // === CONTENT ===
    case 'h1': return { ...baseElement, text: 'New Heading 1' };
    case 'h2': return { ...baseElement, text: 'New Heading 2' };
    case 'h3': return { ...baseElement, text: 'New Heading 3' };
    case 'p': return { ...baseElement, text: 'New paragraph text.' };
    case 'hr': return baseElement;
    case 'blockquote': return { ...baseElement, text: 'A notable quote.' };
    case 'code': return { ...baseElement, content: 'console.log("Hello, World!");', options: { language: 'javascript' } };
    case 'ul': return { ...baseElement, items: ['List item 1', 'List item 2'] };
    case 'ol': return { ...baseElement, items: ['First item', 'Second item'] };
    
    // === SIMPLE INPUTS ===
    case 'text': return { ...baseElement, name: generateElementName(type), question: 'Text Question', placeholder: 'Placeholder' };
    case 'textarea': return { ...baseElement, name: generateElementName(type), question: 'Textarea Question', placeholder: 'Enter longer text...' };
    case 'email': return { ...baseElement, name: generateElementName(type), question: 'Email Question', placeholder: 'name@example.com' };
    case 'password': return { ...baseElement, name: generateElementName(type), question: 'Password Question' };
    case 'url': return { ...baseElement, name: generateElementName(type), question: 'URL Question', placeholder: 'https://example.com' };
    case 'tel': return { ...baseElement, name: generateElementName(type), question: 'Telephone Question' };
    case 'number': return { ...baseElement, name: generateElementName(type), question: 'Number Question', min: 0 };
    case 'file': return { ...baseElement, name: generateElementName(type), question: 'File Upload' };
    
    // === DATE/TIME INPUTS ===
    case 'date': return { ...baseElement, name: generateElementName(type), question: 'Date Question' };
    case 'time': return { ...baseElement, name: generateElementName(type), question: 'Time Question' };
    case 'datetime': return { ...baseElement, name: generateElementName(type), question: 'Date & Time Question' };
    
    // === CHOICE-BASED INPUTS ===
    case 'select': return { ...baseElement, name: generateElementName(type), question: 'Select Question', options: ['Option 1', 'Option 2'] };
    case 'choice': return { ...baseElement, name: generateElementName(type), question: 'Choice Question', choices: ['Choice 1', 'Choice 2'] };
    case 'pictureChoice': return { ...baseElement, name: generateElementName(type), question: 'Picture Choice Question', choices: [
        { label: 'Option 1', value: 'option1', image: 'https://img.icons8.com/clouds/200/image.png' },
        { label: 'Option 2', value: 'option2', image: 'https://img.icons8.com/clouds/200/gallery.png' },
      ]
    };

    // === SCALE/RATING INPUTS ===
    case 'rating': return { ...baseElement, name: generateElementName(type), question: 'Rating Question', max: 5 };
    case 'opinionScale': return { ...baseElement, name: generateElementName(type), question: 'Opinion Scale Question', min: 0, max: 10, minLabel: 'Disagree', maxLabel: 'Agree' };

    default:
      return { ...baseElement, name: generateElementName('unknown') };
  }
};