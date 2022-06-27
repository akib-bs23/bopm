
import { useEffect } from 'react';
import PDFList from './components/PDFList';
// import TestViewer from './components/TestViewer';
import { Data } from './data/PDFListData';
import IPDFList from './models/PDFList.model';



function App() {
  const data: IPDFList[] = Data;
  // const defaultLayoutPluginInstance = defaultLayoutPlugin();
  // const fileUrl = "/recources/Angular_Router_Crash_Course.pdf";
  // const searchPluginInstance = searchPlugin();
  // const { ShowSearchPopoverButton } = searchPluginInstance;

  useEffect(() => {
    document.onkeydown = function (e) {
      if (e.ctrlKey || e.altKey) {
        return false;
      }
    };

    window.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    }, false);
  }, [])

  return (

    <div className="small-space ">
      <div className='container'>
        <h1 className='main-title'>PDF Reader with Searching and Navigating</h1>
        <PDFList lists={data} />
        {/* <TestViewer /> */}
      </div>
    </div>


  );
}

export default App;
