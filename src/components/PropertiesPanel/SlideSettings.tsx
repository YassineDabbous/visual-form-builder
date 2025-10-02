import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
  const updateSlideSettings = useFormStore((state) => state.updateSlideSettings);
  const slideOptions = slide.slideOptions || {};

  const handleChange = (key: string, value: any) => {
    const finalValue = value === '' ? undefined : value;
    updateSlideSettings(slideIndex, { [key]: finalValue });
  };

  const getTitle = () => {
    if (slideIndex === 'start') return t('start_slide_settings');
    if (slideIndex === 'end') return t('end_slide_settings');
    return t('slide_settings', { number: slideIndex + 1 });
  };

  return (
    <aside className="w-80 bg-gray-100 p-4 border-l flex flex-col space-y-4 overflow-y-auto">
      <div>
        <h2 className="text-lg font-semibold mb-4">{getTitle()}</h2>
        <div className="space-y-4">
          
          {/* Settings for all slides EXCEPT start/end */}
          {typeof slideIndex === 'number' && (
            <div className="p-3 border rounded-lg bg-white space-y-4">
              <h3 className="text-sm font-semibold text-gray-700">{t('logic_progress')}</h3>
              <TextInput
                label={t('jump_condition')}
                value={slideOptions.jumpCondition || ''}
                onChange={(e) => handleChange('jumpCondition', e.target.value)}
                description={t('jump_condition_placeholder')}
              />
              <TextInput
                label={t('page_progress')}
                value={slideOptions.pageProgress || ''}
                onChange={(e) => handleChange('pageProgress', e.target.value)}
                description={t('page_progress_placeholder')}
              />
               <SelectInput
                label={t('button_alignment')}
                value={slideOptions.buttonAlignment || ''}
                onChange={(e) => handleChange('buttonAlignment', e.target.value)}
              >
                <option value="">{t('default')}</option>
                <option value="start">{t('start')}</option>
                <option value="center">{t('center')}</option>
                <option value="end">{t('end')}</option>
                <option value="stretch">{t('stretch')}</option>
              </SelectInput>
              <BooleanToggle
                label={t('partial_post')}
                description={t('partial_post_description')}
                checked={slideOptions.post || false}
                onChange={(e) => handleChange('post', e.target.checked)}
              />
              <BooleanToggle
                label={t('disable_previous_button')}
                checked={slideOptions.disablePrevious || false}
                onChange={(e) => handleChange('disablePrevious', e.target.checked)}
              />
            </div>
          )}

          {/* --- SETTINGS FOR START SLIDE --- */}
          {slideIndex === 'start' && (
            <div className="p-3 border rounded-lg bg-white space-y-4">
               <h3 className="text-sm font-semibold text-gray-700">{t('start_slide_options')}</h3>
               <TextInput
                label={t('button_text')}
                value={slideOptions.buttonText || ''}
                onChange={(e) => handleChange('buttonText', e.target.value)}
                placeholder={t('start')}
              />
              <SelectInput
                label={t('button_alignment')}
                value={slideOptions.buttonAlignment || ''}
                onChange={(e) => handleChange('buttonAlignment', e.target.value)}
              >
                <option value="">{t('default')}</option>
                <option value="start">{t('start')}</option>
                <option value="center">{t('center')}</option>
                <option value="end">{t('end')}</option>
                <option value="stretch">{t('stretch')}</option>
              </SelectInput>
            </div>
          )}

           {/* --- SETTINGS FOR END SLIDE --- */}
          {slideIndex === 'end' && (
            <div className="p-3 border rounded-lg bg-white space-y-4">
               <h3 className="text-sm font-semibold text-gray-700">{t('end_slide_options')}</h3>
               <TextInput
                label={t('redirect_url')}
                value={slideOptions.redirectUrl || ''}
                onChange={(e) => handleChange('redirectUrl', e.target.value)}
                placeholder={t('redirect_url_placeholder')}
              />
            </div>
          )}

        </div>
      </div>
    </aside>
  );
};

export default SlideSettings;