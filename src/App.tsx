
import Canvas from './components/Canvas';
import PropertiesPanel from './components/PropertiesPanel';
import Toolbox from './components/Toolbox';

function App() {
  return (
    <div className="flex h-screen w-screen bg-white text-gray-800">
      <Toolbox />
      <Canvas />
      <PropertiesPanel />
    </div>
  );
}

export default App;