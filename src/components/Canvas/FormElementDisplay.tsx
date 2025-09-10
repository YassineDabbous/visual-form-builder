import React from 'react';
import { useTranslation } from 'react-i18next';
import type { FormElement } from '../../types/form';
import { Mail, Type, Star, ChevronsUpDown, Calendar, Clock, KeyRound, Hash, Globe, Phone, FileUp} from 'lucide-react';

interface FormElementDisplayProps {
  element: FormElement;
}

const FormElementDisplay = ({ element }: FormElementDisplayProps) => {
  const { t } = useTranslation();
  const renderInputPlaceholder = (question: string, placeholder: string, icon: React.ReactNode) => (
    <div className="p-3 bg-white rounded-lg border border-gray-200">
      <label className="text-sm text-gray-600 block mb-1">{question}</label>
      <div className="flex items-center gap-2 border border-gray-300 rounded-md p-2 bg-gray-50">
        {icon}
        <span className="text-gray-400 text-sm truncate">{placeholder}</span>
      </div>
    </div>
  );

  switch (element.type) {
    // CONTENT
    case 'h1': return <h1 className="text-3xl font-bold py-2">{element.text}</h1>;
    case 'h2': return <h2 className="text-2xl font-semibold py-2 border-b">{element.text}</h2>;
    case 'h3': return <h3 className="text-xl font-semibold py-1">{element.text}</h3>;
    case 'h4': return <h4 className="text-lg font-semibold py-1 text-gray-800">{element.text}</h4>;
    case 'h5': return <h5 className="text-base font-bold py-1 text-gray-700">{element.text}</h5>;
    case 'h6': return <h6 className="text-sm font-bold uppercase py-1 text-gray-600">{element.text}</h6>;
    
    case 'p': return <p className="text-base py-2">{element.text}</p>;
    case 'hr': return <hr className="my-4" />;
    case 'blockquote': return <blockquote className="pl-4 border-l-4 border-gray-300 italic text-gray-600 my-2">{element.text}</blockquote>;
    case 'ul': return <ul className="list-disc list-inside space-y-1 my-2">{element.items?.map((item: string, i: number) => <li key={i}>{item}</li>)}</ul>;
    case 'ol': return <ol className="list-decimal list-inside space-y-1 my-2">{element.items?.map((item: string, i: number) => <li key={i}>{item}</li>)}</ol>;
    case 'code': return <pre className="bg-gray-800 text-white p-3 rounded-md text-sm my-2"><code>{element.content}</code></pre>;

    // SIMPLE INPUTS
    case 'text': return renderInputPlaceholder(element.question || t('display_text'), t('display_user_input'), <Type size={16} />);
    case 'textarea': return renderInputPlaceholder(element.question || t('display_text_area'), t('display_longer_user_input'), <Type size={16} />);
    case 'email': return renderInputPlaceholder(element.question || t('display_email'), t('display_email_placeholder'), <Mail size={16} />);
    case 'password': return renderInputPlaceholder(element.question || t('display_password'), t('display_password_placeholder'), <KeyRound size={16} />);
    case 'number': return renderInputPlaceholder(element.question || t('display_number'), t('display_number_placeholder'), <Hash size={16} />);
    case 'url': return renderInputPlaceholder(element.question || t('display_url'), t('display_url_placeholder'), <Globe size={16} />);
    case 'tel': return renderInputPlaceholder(element.question || t('display_telephone'), t('display_telephone_placeholder'), <Phone size={16} />);
    
    // DATE/TIME INPUTS
    case 'date': return renderInputPlaceholder(element.question || t('display_date'), t('display_date_placeholder'), <Calendar size={16} />);
    case 'time': return renderInputPlaceholder(element.question || t('display_time'), t('display_time_placeholder'), <Clock size={16} />);
    case 'datetime': return renderInputPlaceholder(element.question || t('display_datetime'), t('display_datetime_placeholder'), <Calendar size={16} />);

    // CHOICE-BASED & RATING
    case 'select': return renderInputPlaceholder(element.question || t('display_select'), t('display_choose_option'), <ChevronsUpDown size={16} />);
    case 'choice': return renderInputPlaceholder(element.question || t('display_choice'), t('display_select_one_or_more'), <ChevronsUpDown size={16} />);
    case 'pictureChoice': return renderInputPlaceholder(element.question || t('display_picture_choice'), t('display_select_a_picture'), <ChevronsUpDown size={16} />);
    case 'rating': return renderInputPlaceholder(element.question || t('display_rating'), t('display_stars_will_be_shown'), <Star size={16} />);
    case 'opinionScale': return renderInputPlaceholder(element.question || t('display_opinion_scale'), t('display_a_scale_will_be_shown'), <ChevronsUpDown size={16} />);

    // FILE
    case 'file': return renderInputPlaceholder(element.question || t('display_file_upload'), t('display_no_file_chosen'), <FileUp size={16} />);

    default:
      return <div className="p-3 bg-red-100 text-red-700 rounded-lg border border-red-300">{t('unknown_element_type', { type: element.type })}</div>;
  }
};

export default FormElementDisplay;