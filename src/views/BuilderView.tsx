import Canvas from '../components/Canvas';
import PropertiesPanel from '../components/PropertiesPanel';
import Toolbox from '../components/Toolbox';
import { useEffect } from 'react';
import useFormStore from '../store/formStore';
import { validateExamForm } from '../lib/exam-validator';

const BuilderView = () => {
  const formDefinition = useFormStore((state) => state.formDefinition);
  const setExamValidationErrors = useFormStore((state) => state.setExamValidationErrors);

  // --- Run validation whenever the form changes ---
  useEffect(() => {
    const errors = validateExamForm(formDefinition);
    setExamValidationErrors(errors);
  }, [formDefinition, setExamValidationErrors]);
  
  return (
    <div className="flex h-full w-full bg-white">
      <Toolbox />
      <Canvas />
      <PropertiesPanel />
    </div>
  );
};

export default BuilderView;