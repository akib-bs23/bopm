import { Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import { searchPlugin } from '@react-pdf-viewer/search';
import PDFViewer from './components/PDFViewer';

// import PDFList from './components/PDFList';
// import { Data } from './data/PDFListData';
// import IPDFList from './models/PDFList.model';



function App() {
  // const data: IPDFList[] = Data
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const fileUrl = "/recources/Angular_Router_Crash_Course.pdf";
  const searchPluginInstance = searchPlugin();
  const { ShowSearchPopoverButton } = searchPluginInstance;

  return (

    <div className="p-4">
      <div className='max-w-4xl w-full mx-auto'>
        <h1 className='text-4xl text-center mt-4 mb-7 font-bold text-purple-600'>PDF Read and Search</h1>
        {/* <PDFList lists={data} /> */}
        <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.worker.min.js">
          <PDFViewer />
        </Worker>

      </div>
    </div>


  );
}

export default App;
