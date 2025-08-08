import { DndContext, DragOverlay, type DragStartEvent, type DragEndEvent } from '@dnd-kit/core';
import { useState } from 'react';
import { useDndHandlers } from './hooks/useDndHandlers';
import DragOverlayContent from './components/shared/DragOverlayContent';
import BuilderView from './views/BuilderView';
import LivePreview from './views/LivePreview';
import JsonOutputView from './views/JsonOutputView';

type ActiveTab = 'builder' | 'preview' | 'json';

function App() {
  const { handleDragEnd } = useDndHandlers();
  const [activeDragItem, setActiveDragItem] = useState<DragStartEvent['active'] | null>(null);
  const [activeTab, setActiveTab] = useState<ActiveTab>('builder');

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
      <div className="flex flex-col h-screen w-screen bg-gray-100 text-gray-800">
        <header className="flex items-end px-4 pt-2 border-b border-gray-200 bg-gray-100">
          <TabButton tab="builder" label="Builder" />
          <TabButton tab="preview" label="Live Preview" />
          <TabButton tab="json" label="Export JSON" />
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