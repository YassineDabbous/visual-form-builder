import type { FormElement } from "../types/form";
import i18n from '../i18n';

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
      return { ...baseElement, type: 'h2', text: i18n.t('new_heading') };

    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    case 'h5':
    case 'h6':
      return { ...baseElement, text: i18n.t('new_heading') };
    
    case 'p': return { ...baseElement, text: i18n.t('new_paragraph') };
    case 'hr': return baseElement;
    case 'blockquote': return { ...baseElement, text: i18n.t('notable_quote') };
    case 'code': return { ...baseElement, content: 'console.log("Hello, World!");', options: { language: 'javascript' } };
    case 'ul': return { ...baseElement, items: [i18n.t('list_item_1'), i18n.t('list_item_2')] };
    case 'ol': return { ...baseElement, items: [i18n.t('first_item'), i18n.t('second_item')] };
    
    case 'text': return { ...baseElement, name: generateElementName(id, type), question: i18n.t('text_question'), placeholder: i18n.t('placeholder_text') };
    case 'textarea': return { ...baseElement, name: generateElementName(id, type), question: i18n.t('textarea_question'), placeholder: i18n.t('textarea_placeholder') };
    case 'email': return { ...baseElement, name: generateElementName(id, type), question: i18n.t('email_question'), placeholder: 'name@example.com' };
    case 'password': return { ...baseElement, name: generateElementName(id, type), question: i18n.t('password_question') };
    case 'url': return { ...baseElement, name: generateElementName(id, type), question: i18n.t('url_question'), placeholder: 'https://example.com' };
    case 'tel': return { ...baseElement, name: generateElementName(id, type), question: i18n.t('tel_question') };
    case 'number': return { ...baseElement, name: generateElementName(id, type), question: i18n.t('number_question'), min: 0 };
    case 'file': return { ...baseElement, name: generateElementName(id, type), question: i18n.t('file_upload_question') };
    case 'date': return { ...baseElement, name: generateElementName(id, type), question: i18n.t('date_question') };
    case 'time': return { ...baseElement, name: generateElementName(id, type), question: i18n.t('time_question') };
    case 'datetime': return { ...baseElement, name: generateElementName(id, type), question: i18n.t('datetime_question') };
    case 'select': return { ...baseElement, name: generateElementName(id, type), question: i18n.t('select_question'), options: [i18n.t('option_1'), i18n.t('option_2')] };
    case 'choice': return { ...baseElement, name: generateElementName(id, type), question: i18n.t('choice_question'), choices: [i18n.t('choice_1'), i18n.t('choice_2')] };
    case 'pictureChoice': return { ...baseElement, name: generateElementName(id, type), question: i18n.t('picture_choice_question'), choices: [
        { label: i18n.t('option_1'), value: 'option1', image: 'https://img.icons8.com/clouds/200/image.png' },
        { label: i18n.t('option_2'), value: 'option2', image: 'https://img.icons8.com/clouds/200/gallery.png' },
      ]
    };
    case 'rating': return { ...baseElement, name: generateElementName(id, type), question: i18n.t('rating_question'), max: 5 };
    case 'opinionScale': return { ...baseElement, name: generateElementName(id, type), question: i18n.t('opinion_scale_question'), min: 0, max: 10, minLabel: i18n.t('disagree'), maxLabel: i18n.t('agree') };

    default:
      return { ...baseElement, name: generateElementName(id, 'unknown') };
  }
};