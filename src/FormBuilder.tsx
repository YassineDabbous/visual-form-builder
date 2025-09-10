import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DndContext, DragOverlay, type DragStartEvent, type DragEndEvent } from '@dnd-kit/core';
import { Toaster, toast } from 'react-hot-toast';
import { FolderUp, Undo2, Redo2, Cloud, CloudUpload, FolderDown } from 'lucide-react';

import type { FormDefinition } from './types/form';
import { useDndHandlers } from './hooks/useDndHandlers';
import DragOverlayContent from './components/shared/DragOverlayContent';
import BuilderView from './views/BuilderView';
import LivePreview from './views/LivePreview';
import JsonOutputView from './views/JsonOutputView';
import useFormStore, { useTemporalStore } from './store/formStore';

export interface FormBuilderProps {
  initialData?: FormDefinition;
  onSave: (data: FormDefinition) => Promise<string | null>;
  onLoad?: () => Promise<FormDefinition>;
}

type ActiveTab = 'builder' | 'preview' | 'json';

export const FormBuilder = ({ initialData, onSave, onLoad }: FormBuilderProps) => {
  const { t, i18n } = useTranslation();
  const { handleDragEnd } = useDndHandlers();
  const [activeDragItem, setActiveDragItem] = useState<DragStartEvent['active'] | null>(null);
  const [activeTab, setActiveTab] = useState<ActiveTab>('builder');
  const [isSaving, setIsSaving] = useState(false);

  const formDefinition = useFormStore((state) => state.formDefinition);
  const saveToLocalStorage = useFormStore((state) => state.saveToLocalStorage);
  const setFormDefinition = useFormStore((state) => state.setFormDefinition);
  const { undo, redo, clear, pastStates, futureStates } = useTemporalStore((state) => state);

  // --- Initialize with provided data ---
  useEffect(() => {
    if (initialData) {
      setFormDefinition(initialData);
      clear();
    }
  }, [initialData, setFormDefinition, clear]);

  // --- Save to Local Storage ---
  const handleSaveToBrowser = () => {
    saveToLocalStorage();
    toast.success(t('saved_to_browser_storage'));
  };
  // --- Load from Local Storage ---
  const handleLoadFromBrowser = () => {
    const savedJson = localStorage.getItem('formsmd_builder_save');
    if (savedJson) {
      if (window.confirm(t('confirm_load_from_browser'))) {
        try {
          const loadedDefinition = JSON.parse(savedJson);
          setFormDefinition(loadedDefinition);
          clear();
          toast.success(t('form_loaded_successfully'));
        } catch (error) {
          toast.error(t('could_not_load_form'));
          console.error("Failed to parse saved form data:", error);
        }
      }
    } else {
      toast.error(t('no_saved_form_found'));
    }
  };

  // --- Save to Server Handler ---
  const handleSaveToServer = async () => {
    setIsSaving(true);
    const savingToast = toast.loading(t('saving_to_server'));
    try {
      const error = await onSave(formDefinition);
      if (error) {
        toast.error(t('save_failed', { error }), { id: savingToast });
      } else {
        toast.success(t('saved_to_server_successfully'), { id: savingToast });
      }
    } catch (e: any) {
      toast.error(t('unexpected_error', { message: e.message }), { id: savingToast });
    } finally {
      setIsSaving(false);
    }
  };

  // --- Load from Server Handler ---
  const handleLoadFromServer = async () => {
    if (!onLoad) return;
    if (window.confirm(t('confirm_load_from_server'))) {
      const loadingToast = toast.loading(t('loading_from_server'));
      try {
        const data = await onLoad();
        setFormDefinition(data);
        clear();
        toast.success(t('loaded_from_server_successfully'), { id: loadingToast });
      } catch (e: any) {
        toast.error(t('failed_to_load', { message: e.message }), { id: loadingToast });
      }
    }
  };

  // --- Handling drag feature ---
  const handleDragStart = (event: DragStartEvent) => setActiveDragItem(event.active);
  const handleDragEndAndClear = (event: DragEndEvent) => {
    handleDragEnd(event);
    setActiveDragItem(null);
  };
  
  const TabButton = ({ tab, label }: { tab: ActiveTab; label: string }) => (
    <button onClick={() => setActiveTab(tab)} className={`px-4 py-2 text-sm font-medium rounded-t-lg ${activeTab === tab ? 'bg-white text-blue-600 border-gray-200 border-t border-x' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}>
      {label}
    </button>
  );

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEndAndClear}>
      <Toaster position="bottom-center" toastOptions={{ duration: 3000, style: { background: '#333', color: '#fff' } }} />
      <div className="flex flex-col h-full w-full bg-gray-100 text-gray-800">
        <header className="flex justify-between items-end px-4 pt-2 border-b border-gray-200 bg-gray-100">
          <div>
            <TabButton tab="builder" label={t('builder')} />
            <TabButton tab="preview" label={t('live_preview')} />
            <TabButton tab="json" label={t('export_json')} />
          </div>

          <div className="flex items-center gap-2 mb-1">
            <button onClick={() => undo()} disabled={pastStates.length === 0} className="p-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" aria-label={t('undo')}><Undo2 size={14} /></button>
            <button onClick={() => redo()} disabled={futureStates.length === 0} className="p-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" aria-label={t('redo')}><Redo2 size={14} /></button>
            <div className="w-px h-6 bg-gray-300 mx-1"></div>
            <select
              value={i18n.language}
              onChange={(e) => i18n.changeLanguage(e.target.value)}
              className="p-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <option value="en">English</option>
              <option value="ar">العربية</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
              <option value="it">Italiano</option>
              <option value="zh">中文</option>
            </select>
            <div className="w-px h-6 bg-gray-300 mx-1"></div>
            <button onClick={handleLoadFromBrowser} className="flex items-center gap-2 px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50"><FolderDown size={14} />{t('local_load')}</button>
            <button onClick={handleSaveToBrowser} className="flex items-center gap-2 px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50"><FolderUp size={14} />{t('local_save')}</button>
            {onLoad && <button onClick={handleLoadFromServer} className="flex items-center gap-2 px-3 py-1 text-sm bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:bg-blue-400"><Cloud size={14} />{t('remote_load')}</button>}
            <button onClick={handleSaveToServer} disabled={isSaving} className="flex items-center gap-2 px-3 py-1 text-sm bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:bg-blue-400"><CloudUpload size={14} />{t('remote_save')}</button>
          </div>
        </header>

        <div className="flex-1  overflow-y-auto">
          {activeTab === 'builder' && <BuilderView />}
          {activeTab === 'preview' && <LivePreview />}
          {activeTab === 'json' && <JsonOutputView />}
        </div>
      </div>
      
      <DragOverlay dropAnimation={null}>
        {activeDragItem && activeTab === 'builder' ? <DragOverlayContent activeItem={activeDragItem} /> : null}
      </DragOverlay>
    </DndContext>
  );
};