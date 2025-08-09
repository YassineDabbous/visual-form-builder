import { useState } from 'react';
import useFormStore from '../../store/formStore';
import TextInput from './shared/TextInput';
import { SelectInput } from './shared/SelectInput';
import { BooleanToggle } from './shared/SharedProperties';

type SettingsTab = 'general' | 'appearance' | 'behavior' | 'submission' | 'advanced';

const FormSettings = () => {
  const formDefinition = useFormStore((state) => state.formDefinition);
  const updateFormSettings = useFormStore((state) => state.updateFormSettings);

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
        <h2 className="text-lg font-semibold mb-4">Form Settings</h2>
        <div className="flex flex-wrap items-center gap-2 mb-4 border-b pb-2">
          <TabButton tab="general" label="General" />
          <TabButton tab="appearance" label="Appearance" />
          <TabButton tab="behavior" label="Behavior" />
          <TabButton tab="submission" label="Submission" />
          <TabButton tab="advanced" label="Advanced" />
        </div>
        <div className="space-y-4">

          {activeTab === 'general' && (
            <div className="space-y-4 animate-fade-in">
              <TextInput label="Form ID" value={formDefinition.settings.id || ''} onChange={(e) => handleSettingChange('id', e.target.value)} />
              <SelectInput label="Text Direction (dir)" value={formDefinition.settings.dir || 'ltr'} onChange={(e) => handleSettingChange('dir', e.target.value)}>
                <option value="ltr">Left-to-Right</option>
                <option value="rtl">Right-to-Left</option>
              </SelectInput>
               <TextInput label="Language (localization)" value={formDefinition.settings.localization || ''} onChange={(e) => handleSettingChange('localization', e.target.value)} placeholder="en" />
            </div>
          )}

          {activeTab === 'appearance' && (
            <div className="space-y-4 animate-fade-in">
              <SelectInput label="Form Style" value={formDefinition.settings.formStyle || ''} onChange={(e) => handleSettingChange('formStyle', e.target.value)}><option value="">Default</option><option value="classic">Classic</option></SelectInput>
              <SelectInput label="Font Size" value={formDefinition.settings.fontSize || ''} onChange={(e) => handleSettingChange('fontSize', e.target.value)}><option value="">Default</option><option value="sm">Small</option><option value="lg">Large</option></SelectInput>
              <SelectInput label="Global Field Size" value={formDefinition.settings.fieldSize || ''} onChange={(e) => handleSettingChange('fieldSize', e.target.value)}><option value="">Default</option><option value="sm">Small</option></SelectInput>
              <SelectInput label="Global Label Style" value={formDefinition.settings.labelStyle || ''} onChange={(e) => handleSettingChange('labelStyle', e.target.value)}><option value="">Default</option><option value="classic">Classic</option></SelectInput>
              <SelectInput label="Rounding Style (rounded)" value={formDefinition.settings.rounded || ''} onChange={(e) => handleSettingChange('rounded', e.target.value)}><option value="">Default</option><option value="none">None</option><option value="pill">Pill</option></SelectInput>
              <BooleanToggle label="Anchored Headings" checked={formDefinition.settings.headings === 'anchored'} onChange={(e) => handleSettingChange('headings', e.target.checked ? 'anchored' : undefined)} />
            </div>
          )}

          {activeTab === 'behavior' && (
            <div className="space-y-4 animate-fade-in">
               <SelectInput label="Page Layout" value={formDefinition.settings.page || 'form-slides'} onChange={(e) => handleSettingChange('page', e.target.value)}><option value="form-slides">Form Slides</option><option value="slides">Slides</option><option value="single">Single Page</option></SelectInput>
               <SelectInput label="Page Progress Bar" value={formDefinition.settings.pageProgress || ''} onChange={(e) => handleSettingChange('pageProgress', e.target.value)}><option value="">Default (Show)</option><option value="hide">Hide</option><option value="decorative">Decorative</option></SelectInput>
               <SelectInput label="Slide Controls (Prev/Next)" value={formDefinition.settings.slideControls || ''} onChange={(e) => handleSettingChange('slideControls', e.target.value)}><option value="">Default (Show)</option><option value="hide">Hide</option></SelectInput>
               <BooleanToggle label="Autofocus First Field" checked={formDefinition.settings.autofocus === 'all-slides'} onChange={(e) => handleSettingChange('autofocus', e.target.checked ? 'all-slides' : undefined)} />
               <BooleanToggle label="Show Restart Button" checked={formDefinition.settings.restartButton === 'show'} onChange={(e) => handleSettingChange('restartButton', e.target.checked ? 'show' : undefined)} />
               <BooleanToggle label="Save State in Browser" description="Runtime option" checked={formDefinition.options.saveState !== false} onChange={(e) => handleOptionChange('saveState', e.target.checked)} />
            </div>
          )}

          {activeTab === 'submission' && (
            <div className="space-y-4 animate-fade-in">
              <TextInput label="Submission URL (postUrl)" value={formDefinition.settings.postUrl || ''} onChange={(e) => handleSettingChange('postUrl', e.target.value)} />
              <TextInput label="Submit Button Text" value={formDefinition.settings.submitButtonText || ''} onChange={(e) => handleSettingChange('submitButtonText', e.target.value)} placeholder="Submit" />
              <TextInput label="Google Sheet Name" value={formDefinition.settings.postSheetName || ''} onChange={(e) => handleSettingChange('postSheetName', e.target.value)} description="For Google Sheets integration." />
            </div>
          )}

           {activeTab === 'advanced' && (
            <div className="space-y-4 animate-fade-in">
               <SelectInput label="Forms.md Branding" value={formDefinition.settings.formsmdBranding || ''} onChange={(e) => handleSettingChange('formsmdBranding', e.target.value)}>
                <option value="">Default (Show)</option>
                <option value="hide">Hide (Pro)</option>
              </SelectInput>
               <SelectInput label="Footer" value={formDefinition.settings.footer || ''} onChange={(e) => handleSettingChange('footer', e.target.value)}>
                <option value="">Default (Show)</option>
                <option value="hide">Hide (Pro)</option>
              </SelectInput>
              <TextInput label="CSS Prefix" value={formDefinition.settings.cssPrefix || ''} onChange={(e) => handleSettingChange('cssPrefix', e.target.value)} placeholder="fmd-" />
            </div>
          )}

        </div>
      </div>
    </aside>
  );
};

export default FormSettings;