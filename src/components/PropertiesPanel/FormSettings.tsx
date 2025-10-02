import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import useFormStore from '../../store/formStore';
import TextInput from './shared/TextInput';
import { SelectInput } from './shared/SelectInput';
import { BooleanToggle } from './shared/SharedProperties';

type SettingsTab = 'general' | 'appearance' | 'behavior' | 'submission' | 'advanced';

const FormSettings = () => {
  const { t } = useTranslation();
  const formDefinition = useFormStore((state) => state.formDefinition);
  const updateFormSettings = useFormStore((state) => state.updateFormSettings);
  const toggleStartSlide = useFormStore((state) => state.toggleStartSlide);
  const toggleEndSlide = useFormStore((state) => state.toggleEndSlide);

  const [activeTab, setActiveTab] = useState<SettingsTab>('general');

  const handleOptionChange = (key: string, value: any) => {
    const finalValue = value === '' || value === false ? undefined : value;
    const newOptions = { ...formDefinition.options, [key]: finalValue };
    // We update the whole options object
    updateFormSettings({ options: newOptions });
  };

  const handleSettingChange = (key: string, value: any) => {
    const finalValue = value === '' || value === false ? undefined : value;
    updateFormSettings({ [key]: finalValue });
  };
  
  const TabButton = ({ tab, label }: { tab: SettingsTab; label:string }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-3 py-1 text-xs font-medium rounded-md ${
        activeTab === tab ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
    >
      {label}
    </button>
  );

  return (
    <aside className="w-80 bg-gray-100 p-4 border-l flex flex-col space-y-4 overflow-y-auto">
      <div>
        <h2 className="text-lg font-semibold mb-4">{t('form_settings')}</h2>
        <div className="flex flex-wrap items-center gap-2 mb-4 border-b pb-2">
          <TabButton tab="general" label={t('general')} />
          <TabButton tab="appearance" label={t('appearance')} />
          <TabButton tab="behavior" label={t('behavior')} />
          <TabButton tab="submission" label={t('submission')} />
          <TabButton tab="advanced" label={t('advanced')} />
        </div>
        <div className="space-y-4">

          {activeTab === 'general' && (
            <div className="space-y-4 animate-fade-in">
              <TextInput label={t('form_id')} value={formDefinition.settings.id || ''} onChange={(e) => handleSettingChange('id', e.target.value)} />
              <SelectInput label={t('text_direction')} value={formDefinition.settings.dir || 'ltr'} onChange={(e) => handleSettingChange('dir', e.target.value)}>
                <option value="ltr">{t('ltr')}</option>
                <option value="rtl">{t('rtl')}</option>
              </SelectInput>
               <TextInput label={t('language_localization')} value={formDefinition.settings.localization || ''} onChange={(e) => handleSettingChange('localization', e.target.value)} placeholder="en" />
                
              <div className="p-3 border rounded-lg bg-white space-y-3">
                 <BooleanToggle
                  label={t('add_welcome_slide')}
                  description={t('introductory_slide')}
                  checked={!!formDefinition.startSlide}
                  onChange={(e) => toggleStartSlide(e.target.checked)}
                />
                <BooleanToggle
                  label={t('add_end_slide')}
                  description={t('final_thank_you_slide')}
                  checked={!!formDefinition.endSlide}
                  onChange={(e) => toggleEndSlide(e.target.checked)}
                />
              </div>
              
              <div className="p-3 border rounded-lg bg-white space-y-3">
                 <BooleanToggle
                  label={t('enable_auto_correction')}
                  description={t('exam_mode_description')}
                  checked={!!formDefinition.settings.isAutoSolvable}
                  onChange={(e) => handleSettingChange('isAutoSolvable', e.target.checked)}
                />
              </div>
              
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="space-y-4 animate-fade-in">
              <SelectInput label={t('form_style')} value={formDefinition.settings.formStyle || ''} onChange={(e) => handleSettingChange('formStyle', e.target.value)}><option value="">{t('default')}</option><option value="classic">{t('classic')}</option></SelectInput>
              <SelectInput label={t('font_size')} value={formDefinition.settings.fontSize || ''} onChange={(e) => handleSettingChange('fontSize', e.target.value)}><option value="">{t('default')}</option><option value="sm">{t('small')}</option><option value="lg">{t('large')}</option></SelectInput>
              <SelectInput label={t('global_field_size')} value={formDefinition.settings.fieldSize || ''} onChange={(e) => handleSettingChange('fieldSize', e.target.value)}><option value="">{t('default')}</option><option value="sm">{t('small')}</option></SelectInput>
              <SelectInput label={t('global_label_style')} value={formDefinition.settings.labelStyle || ''} onChange={(e) => handleSettingChange('labelStyle', e.target.value)}><option value="">{t('default')}</option><option value="classic">{t('classic')}</option></SelectInput>
              <SelectInput label={t('rounding_style')} value={formDefinition.settings.rounded || ''} onChange={(e) => handleSettingChange('rounded', e.target.value)}><option value="">{t('default')}</option><option value="none">{t('none')}</option><option value="pill">{t('pill')}</option></SelectInput>
              <BooleanToggle label={t('anchored_headings')} checked={formDefinition.settings.headings === 'anchored'} onChange={(e) => handleSettingChange('headings', e.target.checked ? 'anchored' : undefined)} />
            </div>
          )}

          {activeTab === 'behavior' && (
            <div className="space-y-4 animate-fade-in">
               <SelectInput label={t('page_layout')} value={formDefinition.settings.page || 'form-slides'} onChange={(e) => handleSettingChange('page', e.target.value)}><option value="form-slides">{t('form_slides')}</option><option value="slides">{t('slides')}</option><option value="single">{t('single_page')}</option></SelectInput>
               <SelectInput label={t('page_progress_bar')} value={formDefinition.settings.pageProgress || ''} onChange={(e) => handleSettingChange('pageProgress', e.target.value)}><option value="">{t('default_show')}</option><option value="hide">{t('hide')}</option><option value="decorative">{t('decorative')}</option></SelectInput>
               <SelectInput label={t('slide_controls')} value={formDefinition.settings.slideControls || ''} onChange={(e) => handleSettingChange('slideControls', e.target.value)}><option value="">{t('default_show')}</option><option value="hide">{t('hide')}</option></SelectInput>
               <BooleanToggle label={t('autofocus_first_field')} checked={formDefinition.settings.autofocus === 'all-slides'} onChange={(e) => handleSettingChange('autofocus', e.target.checked ? 'all-slides' : undefined)} />
               <BooleanToggle label={t('show_restart_button')} checked={formDefinition.settings.restartButton === 'show'} onChange={(e) => handleSettingChange('restartButton', e.target.checked ? 'show' : undefined)} />
               <BooleanToggle label={t('save_state_in_browser')} description={t('runtime_option')} checked={formDefinition.options.saveState !== false} onChange={(e) => handleOptionChange('saveState', e.target.checked)} />
            </div>
          )}

          {activeTab === 'submission' && (
            <div className="space-y-4 animate-fade-in">
              <TextInput label={t('submission_url')} value={formDefinition.settings.postUrl || ''} onChange={(e) => handleSettingChange('postUrl', e.target.value)} />
              <TextInput label={t('submit_button_text')} value={formDefinition.settings.submitButtonText || ''} onChange={(e) => handleSettingChange('submitButtonText', e.target.value)} placeholder={t('submit')} />
              <TextInput label={t('google_sheet_name')} value={formDefinition.settings.postSheetName || ''} onChange={(e) => handleSettingChange('postSheetName', e.target.value)} description={t('google_sheets_integration')} />
            </div>
          )}

           {activeTab === 'advanced' && (
            <div className="space-y-4 animate-fade-in">
               <SelectInput label={t('formsmd_branding')} value={formDefinition.settings.formsmdBranding || ''} onChange={(e) => handleSettingChange('formsmdBranding', e.target.value)}>
                <option value="">{t('default_show')}</option>
                <option value="hide">{t('hide_pro')}</option>
              </SelectInput>
               <SelectInput label={t('footer')} value={formDefinition.settings.footer || ''} onChange={(e) => handleSettingChange('footer', e.target.value)}>
                <option value="">{t('default_show')}</option>
                <option value="hide">{t('hide_pro')}</option>
              </SelectInput>
              <TextInput label={t('css_prefix')} value={formDefinition.settings.cssPrefix || ''} onChange={(e) => handleSettingChange('cssPrefix', e.target.value)} placeholder="fmd-" />
            </div>
          )}

        </div>
      </div>
    </aside>
  );
};

export default FormSettings;