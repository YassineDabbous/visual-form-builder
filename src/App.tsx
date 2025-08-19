import { FormBuilder } from './FormBuilder';
import type { FormDefinition } from './types/form';

// --- MOCK ASYNC FUNCTIONS ---
const getRemoteData = async (): Promise<FormDefinition> => {
  console.log("Fetching data from server...");
  
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const mockData: FormDefinition = {
    settings: { id: 'loaded-from-server', postUrl: '/api/server-endpoint' },
    options: {},
    slides: [{ elements: [{ id: '12345', type: 'h1', text: 'This Form Was Loaded from a Server!' }] }],
  };
  
  // To simulate a failure, you could uncomment this:
  // throw new Error("Could not connect to the database.");

  return mockData;
};

const saveRemoteData = async (data: FormDefinition): Promise<string | null> => {
  console.log("Saving data to server:", data);
  
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // To simulate a validation error from the server, you could uncomment this:
  // return "The form ID 'loaded-from-server' is already taken. Please choose another.";

  // On success, return null
  return null; 
};
// --- END MOCK FUNCTIONS ---



function App() {
  return (
    <div className="h-screen w-screen">
      <FormBuilder
        // initialData={someInitialDataObject} // You could pass initial data here if you had it on page load
        onLoad={getRemoteData}
        onSave={saveRemoteData}
      />
    </div>
  );
}

export default App;