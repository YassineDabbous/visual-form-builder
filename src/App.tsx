import { DndContext, DragOverlay, type DragStartEvent, type DragEndEvent } from '@dnd-kit/core';
import { useState } from 'react';
import { useDndHandlers } from './hooks/useDndHandlers';
import DragOverlayContent from './components/shared/DragOverlayContent';
import BuilderView from './views/BuilderView';
import LivePreview from './views/LivePreview';
import JsonOutputView from './views/JsonOutputView';
import useFormStore, { useTemporalStore } from './store/formStore';
import { Save, FolderUp, Undo2, Redo2 } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';

type ActiveTab = 'builder' | 'preview' | 'json';

function App() {
  const { handleDragEnd } = useDndHandlers();
  const [activeDragItem, setActiveDragItem] = useState<DragStartEvent['active'] | null>(null);
  const [activeTab, setActiveTab] = useState<ActiveTab>('builder');


  const saveToLocalStorage = useFormStore((state) => state.saveToLocalStorage);
  const setFormDefinition = useFormStore((state) => state.setFormDefinition);
  
  const { undo, redo, clear, pastStates, futureStates } = useTemporalStore(
    (state) => state,
  );

  const handleSave = () => {
    saveToLocalStorage();
    toast.success('Form saved successfully!');
  };
  const handleLoad = () => {
    const savedJson = localStorage.getItem('formsmd_builder_save');
    if (savedJson) {
      if (window.confirm('Are you sure you want to load the saved form? This will overwrite your current work.')) {
        try {
          const loadedDefinition = JSON.parse(savedJson);
          setFormDefinition(loadedDefinition);
          clear();
          toast.success('Form loaded successfully!');
        } catch (error) {
          toast.error('Could not load form. Data may be corrupted.');
          console.error("Failed to parse saved form data:", error);
        }
      }
    } else {
      toast.error('No saved form found in browser storage.');
    }
  };

  const handleDragStart = (event: DragStartEvent) => setActiveDragItem(event.active);
  const handleDragEndAndClear = (event: DragEndEvent) => {
    handleDragEnd(event);
    setActiveDragItem(null);
  };

  const TabButton = ({ tab, label }: { tab: ActiveTab; label: string }) => (
    <button
      onClick={() => setActiveTab(tab)}
      className={`px-4 py-2 text-sm font-medium rounded-t-lg ${
        activeTab === tab
          ? 'bg-white text-blue-600 border-gray-200 border-t border-x'
          : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEndAndClear}>

      <Toaster position="bottom-center" toastOptions={{
        duration: 3000,
        style: {
          background: '#333',
          color: '#fff',
        },
      }} />

      <div className="flex flex-col h-screen w-screen bg-gray-100 text-gray-800">
        <header className="flex justify-between items-end px-4 pt-2 border-b border-gray-200 bg-gray-100">
          <div>
            <TabButton tab="builder" label="Builder" />
            <TabButton tab="preview" label="Live Preview" />
            <TabButton tab="json" label="Export JSON" />
          </div>


          <div className="flex items-center gap-2 mb-1">
            <button onClick={ () => undo() } disabled={pastStates.length === 0} className="p-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" aria-label="Undo"> <Undo2 size={14} /> </button>
            <button onClick={() => redo()} disabled={futureStates.length === 0} className="p-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" aria-label="Redo"> <Redo2 size={14} /> </button>
            <div className="w-px h-6 bg-gray-300 mx-1"></div>
            <button onClick={handleLoad} className="flex items-center gap-2 px-3 py-1 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50"><FolderUp size={14} />Load</button>
            <button onClick={handleSave} className="flex items-center gap-2 px-3 py-1 text-sm bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"><Save size={14} />Save</button>
          </div>
        </header>

        <div className="flex-1 overflow-hidden">
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
}

export default App;