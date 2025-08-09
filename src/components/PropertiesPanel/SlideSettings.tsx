import useFormStore from '../../store/formStore';
import TextInput from './shared/TextInput';
import type { FormSlide } from '../../types/form';
import { SelectInput } from './shared/SelectInput';
import { BooleanToggle } from './shared/SharedProperties';

interface SlideSettingsProps {
  slide: FormSlide;
  slideIndex: number | 'start' | 'end';
}

const SlideSettings = ({ slide, slideIndex }: SlideSettingsProps) => {
  const updateSlideSettings = useFormStore((state) => state.updateSlideSettings);
  const slideOptions = slide.slideOptions || {};

  const handleChange = (key: string, value: any) => {
    const finalValue = value === '' || value === false ? undefined : value;
    updateSlideSettings(slideIndex, { [key]: finalValue });
  };

  const getTitle = () => {
    if (slideIndex === 'start') return "Start Slide Settings";
    if (slideIndex === 'end') return "End Slide Settings";
    return `Slide ${slideIndex + 1} Settings`;
  };

  return (
    <aside className="w-80 bg-gray-100 p-4 border-l flex flex-col space-y-4 overflow-y-auto">
      <div>
        <h2 className="text-lg font-semibold mb-4">{getTitle()}</h2>
        <div className="space-y-4">
          
          {/* --- SETTINGS FOR REGULAR SLIDES --- */}
          {typeof slideIndex === 'number' && (
            <div className="p-3 border rounded-lg bg-white space-y-4">
              <h3 className="text-sm font-semibold text-gray-700">Logic & Behavior</h3>
              <TextInput
                label="Jump Condition"
                value={slideOptions.jumpCondition || ''}
                onChange={(e) => handleChange('jumpCondition', e.target.value)}
                description="e.g., field_name == 'value'"
              />
              <TextInput
                label="Page Progress"
                value={slideOptions.pageProgress || ''}
                onChange={(e) => handleChange('pageProgress', e.target.value)}
                description="e.g., 50% or 2/4"
              />
               <SelectInput
                label="Button Alignment"
                value={slideOptions.buttonAlignment || ''}
                onChange={(e) => handleChange('buttonAlignment', e.target.value)}
              >
                <option value="">Default</option>
                <option value="start">Start</option>
                <option value="center">Center</option>
                <option value="end">End</option>
                <option value="stretch">Stretch</option>
              </SelectInput>
              <BooleanToggle
                label="Partial Post"
                description="Post form data up to this slide."
                checked={slideOptions.post || false}
                onChange={(e) => handleChange('post', e.target.checked)}
              />
              <BooleanToggle
                label="Disable Previous Button"
                checked={slideOptions.disablePrevious || false}
                onChange={(e) => handleChange('disablePrevious', e.target.checked)}
              />
            </div>
          )}

          {/* --- SETTINGS FOR START SLIDE --- */}
          {slideIndex === 'start' && (
            <div className="p-3 border rounded-lg bg-white space-y-4">
               <h3 className="text-sm font-semibold text-gray-700">Start Slide Options</h3>
               <TextInput
                label="Button Text"
                value={slideOptions.buttonText || ''}
                onChange={(e) => handleChange('buttonText', e.target.value)}
                placeholder="Start"
              />
              <SelectInput
                label="Button Alignment"
                value={slideOptions.buttonAlignment || ''}
                onChange={(e) => handleChange('buttonAlignment', e.target.value)}
              >
                <option value="">Default</option>
                <option value="start">Start</option>
                <option value="center">Center</option>
                <option value="end">End</option>
                <option value="stretch">Stretch</option>
              </SelectInput>
            </div>
          )}

           {/* --- SETTINGS FOR END SLIDE --- */}
          {slideIndex === 'end' && (
            <div className="p-3 border rounded-lg bg-white space-y-4">
               <h3 className="text-sm font-semibold text-gray-700">End Slide Options</h3>
               <TextInput
                label="Redirect URL"
                value={slideOptions.redirectUrl || ''}
                onChange={(e) => handleChange('redirectUrl', e.target.value)}
                placeholder="https://example.com/thank-you"
              />
            </div>
          )}

        </div>
      </div>
    </aside>
  );
};

export default SlideSettings;