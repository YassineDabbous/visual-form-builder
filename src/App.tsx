import { DndContext, type DragEndEvent, DragOverlay, type DragStartEvent } from '@dnd-kit/core';
import { useState } from 'react';
import Canvas from './components/Canvas';
import PropertiesPanel from './components/PropertiesPanel';
import Toolbox from './components/Toolbox';
import { useDndHandlers } from './hooks/useDndHandlers';
import DragOverlayContent from './components/shared/DragOverlayContent';

function App() {
  const { handleDragEnd } = useDndHandlers();
  
  const [activeDragItem, setActiveDragItem] = useState<DragStartEvent['active'] | null>(null);

  const handleDragStart = (event: DragStartEvent) => {
    setActiveDragItem(event.active);
  };

  const handleDragEndAndClear = (event: DragEndEvent) => {
    handleDragEnd(event);
    setActiveDragItem(null);
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEndAndClear}>
      <div className="flex h-screen w-screen bg-white text-gray-800">
        <Toolbox />
        <Canvas />
        <PropertiesPanel />
      </div>

      <DragOverlay dropAnimation={null}>
        {activeDragItem ? <DragOverlayContent activeItem={activeDragItem} /> : null}
      </DragOverlay>
    </DndContext>
  );
}

export default App;