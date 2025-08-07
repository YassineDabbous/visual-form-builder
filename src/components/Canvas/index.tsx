import useFormStore from '../../store/formStore';
import FormElementDisplay from './FormElementDisplay';

const Canvas = () => { 
  const formDefinition = useFormStore((state) => state.formDefinition);
  const selectedElementId = useFormStore((state) => state.selectedElementId);
  const setSelectedElementId = useFormStore((state) => state.setSelectedElementId);
 

  return (
    <main className="flex-1 p-8 bg-gray-50 overflow-y-auto">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        {formDefinition.slides.map((slide, slideIndex) => (
          <div key={slideIndex} className="mb-8 p-4 border border-dashed rounded-lg">
            <span className="text-xs text-gray-400 mb-2 block">Slide {slideIndex + 1}</span>
            <div className="space-y-4">
              {slide.elements.map((element) => (
                <div
                  key={element.id}
                  onClick={() => setSelectedElementId(element.id)}
                  className={`
                    p-1 rounded-lg cursor-pointer transition-all
                    ${selectedElementId === element.id ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:bg-gray-100'}
                  `}
                >
                  <FormElementDisplay element={element} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Canvas;