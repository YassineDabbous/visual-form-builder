import useFormStore from '../store/formStore';
import {CustomFormRenderer} from 'dynamic-form-renderer';
// import {i18n} from 'dynamic-form-renderer';
import 'dynamic-form-renderer/style.css';

const LivePreview = () => {
  const formDefinition = useFormStore((state) => state.formDefinition);
  
  const handleFormSubmit = (answers: { [key: string]: any }) => {
    console.log('Form Submitted:', answers);
    // Simulate API call
    return new Promise(resolve => setTimeout(() => {
        // setSubmittedData(answers);
        resolve(null);
    }, 1000));
  };

  return (
    <div className="min-h-screen text-gray-900 dark:text-white p-8">
      <CustomFormRenderer
        formDefinition={formDefinition as any} 
        onSubmit={handleFormSubmit}
        language={'ar'}
        // durationInMinutes={10}
        // showCorrection={true}
      />
    </div>
  );
};

export default LivePreview;