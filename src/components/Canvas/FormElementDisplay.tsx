import React from 'react';
import type { FormElement } from '../../types/form';
import { Mail, Type, Star, ChevronsUpDown, Calendar, Clock, KeyRound, Hash, Globe, Phone} from 'lucide-react';

interface FormElementDisplayProps {
  element: FormElement;
}

const FormElementDisplay = ({ element }: FormElementDisplayProps) => {
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
    case 'p': return <p className="text-base py-2">{element.text}</p>;
    case 'hr': return <hr className="my-4" />;
    case 'blockquote': return <blockquote className="pl-4 border-l-4 border-gray-300 italic text-gray-600 my-2">{element.text}</blockquote>;
    case 'ul': return <ul className="list-disc list-inside space-y-1 my-2">{element.items?.map((item: string, i: number) => <li key={i}>{item}</li>)}</ul>;
    case 'ol': return <ol className="list-decimal list-inside space-y-1 my-2">{element.items?.map((item: string, i: number) => <li key={i}>{item}</li>)}</ol>;
    case 'code': return <pre className="bg-gray-800 text-white p-3 rounded-md text-sm my-2"><code>{element.content}</code></pre>;

    // SIMPLE INPUTS
    case 'text': return renderInputPlaceholder(element.question || 'Text', 'User input...', <Type size={16} />);
    case 'textarea': return renderInputPlaceholder(element.question || 'Text Area', 'Longer user input...', <Type size={16} />);
    case 'email': return renderInputPlaceholder(element.question || 'Email', 'name@example.com', <Mail size={16} />);
    case 'password': return renderInputPlaceholder(element.question || 'Password', '••••••••', <KeyRound size={16} />);
    case 'number': return renderInputPlaceholder(element.question || 'Number', '123', <Hash size={16} />);
    case 'url': return renderInputPlaceholder(element.question || 'URL', 'https://example.com', <Globe size={16} />);
    case 'tel': return renderInputPlaceholder(element.question || 'Telephone', '(555) 123-4567', <Phone size={16} />);
    
    // DATE/TIME INPUTS
    case 'date': return renderInputPlaceholder(element.question || 'Date', 'Select a date', <Calendar size={16} />);
    case 'time': return renderInputPlaceholder(element.question || 'Time', 'Select a time', <Clock size={16} />);
    case 'datetime': return renderInputPlaceholder(element.question || 'Date & Time', 'Select date and time', <Calendar size={16} />);

    // CHOICE-BASED & RATING
    case 'select': return renderInputPlaceholder(element.question || 'Select', 'Choose an option', <ChevronsUpDown size={16} />);
    case 'choice': return renderInputPlaceholder(element.question || 'Choice', 'Select one or more', <ChevronsUpDown size={16} />);
    case 'pictureChoice': return renderInputPlaceholder(element.question || 'Picture Choice', 'Select a picture', <ChevronsUpDown size={16} />);
    case 'rating': return renderInputPlaceholder(element.question || 'Rating', 'Stars will be shown here', <Star size={16} />);
    case 'opinionScale': return renderInputPlaceholder(element.question || 'Opinion Scale', 'A scale will be shown', <ChevronsUpDown size={16} />);

    // FILE
    case 'file': return renderInputPlaceholder(element.question || 'File Upload', 'No file chosen', <Type size={16} />);

    default:
      return <div className="p-3 bg-red-100 text-red-700 rounded-lg border border-red-300">Unknown Element Type: {element.type}</div>;
  }
};

export default FormElementDisplay;