import Canvas from '../components/Canvas';
import PropertiesPanel from '../components/PropertiesPanel';
import Toolbox from '../components/Toolbox';

const BuilderView = () => {
  return (
    <div className="flex h-full w-full bg-white">
      <Toolbox />
      <Canvas />
      <PropertiesPanel />
    </div>
  );
};

export default BuilderView;