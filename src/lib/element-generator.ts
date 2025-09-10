import type { FormElement } from "../types/form";

export const randomId = () => Math.random().toString(36).substring(2, 9);
// export const randomId = () => self.crypto.randomUUID();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const generateElementName = (id: string, _type: string) => id; //`${type}_${randomId()}`;

export const generateElement = (type: string): FormElement => {
  const id = self.crypto.randomUUID();
  const baseElement: FormElement = { id, type };

  switch (type) {
    // === Generic 'heading' type for H1, H2, ... ===
    case 'heading':
      return { ...baseElement, type: 'h2', text: 'New Heading' };

    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return { ...baseElement, text: 'New Heading' };
    
    case 'p': return { ...baseElement, text: 'New paragraph text.' };
    case 'hr': return baseElement;
    case 'blockquote': return { ...baseElement, text: 'A notable quote.' };
    case 'code': return { ...baseElement, content: 'console.log("Hello, World!");', options: { language: 'javascript' } };
    case 'ul': return { ...baseElement, items: ['List item 1', 'List item 2'] };
    case 'ol': return { ...baseElement, items: ['First item', 'Second item'] };
    
    case 'text': return { ...baseElement, name: generateElementName(id, type), question: 'Text Question', placeholder: 'Placeholder' };
    case 'textarea': return { ...baseElement, name: generateElementName(id, type), question: 'Textarea Question', placeholder: 'Enter longer text...' };
    case 'email': return { ...baseElement, name: generateElementName(id, type), question: 'Email Question', placeholder: 'name@example.com' };
    case 'password': return { ...baseElement, name: generateElementName(id, type), question: 'Password Question' };
    case 'url': return { ...baseElement, name: generateElementName(id, type), question: 'URL Question', placeholder: 'https://example.com' };
    case 'tel': return { ...baseElement, name: generateElementName(id, type), question: 'Telephone Question' };
    case 'number': return { ...baseElement, name: generateElementName(id, type), question: 'Number Question', min: 0 };
    case 'file': return { ...baseElement, name: generateElementName(id, type), question: 'File Upload' };
    case 'date': return { ...baseElement, name: generateElementName(id, type), question: 'Date Question' };
    case 'time': return { ...baseElement, name: generateElementName(id, type), question: 'Time Question' };
    case 'datetime': return { ...baseElement, name: generateElementName(id, type), question: 'Date & Time Question' };
    case 'select': return { ...baseElement, name: generateElementName(id, type), question: 'Select Question', options: ['Option 1', 'Option 2'] };
    case 'choice': return { ...baseElement, name: generateElementName(id, type), question: 'Choice Question', choices: ['Choice 1', 'Choice 2'] };
    case 'pictureChoice': return { ...baseElement, name: generateElementName(id, type), question: 'Picture Choice Question', choices: [
        { label: 'Option 1', value: 'option1', image: 'https://img.icons8.com/clouds/200/image.png' },
        { label: 'Option 2', value: 'option2', image: 'https://img.icons8.com/clouds/200/gallery.png' },
      ]
    };
    case 'rating': return { ...baseElement, name: generateElementName(id, type), question: 'Rating Question', max: 5 };
    case 'opinionScale': return { ...baseElement, name: generateElementName(id, type), question: 'Opinion Scale Question', min: 0, max: 10, minLabel: 'Disagree', maxLabel: 'Agree' };

    default:
      return { ...baseElement, name: generateElementName(id, 'unknown') };
  }
};