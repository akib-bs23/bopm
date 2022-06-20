import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

interface IModalProps {
  onHideModal?: () => void
  url: string,
  modalShow: boolean
  modalClose: any
}

export default function Modal({ modalShow, url, modalClose }: IModalProps) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin(
  );
  return (
    <>
      <div
        className="transition-all fixed z-50 inset-0 bg-opacity-50 w-full h-full flex justify-center flex-col items-center bg-gray-500">
        <button
          onClick={modalClose}
          className="block text-white absolute right-8 top-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="m-auto relative p-8 w-11/12 h-3/4 overflow-auto z-40 rounded-md bg-blue-300 transition-all delay-200">

          <div>

            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
              <Viewer fileUrl={`/recources/${url}`} plugins={[defaultLayoutPluginInstance]} />
            </Worker>
          </div>
        </div>
      </div>
    </>
  );
}