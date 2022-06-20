import { useState } from "react";
import IPDFList from "../models/PDFList.model";
import Modal from "./Modal";

const PDFListItem: React.FC<IPDFList> = ({ title, name, tags, path, url, description }: IPDFList) => {

  const [showModal, setShowModal] = useState<boolean>(false)



  return (
    <>
      <div onClick={() => setShowModal(!showModal)} className='rounded-md drop-shadow-md bg-white p-4 text-center cursor-pointer transition-all hover:drop-shadow-xl' title="Click to details">
        <img src="/pdf.png" alt="pdf" className="w-12 mx-auto block mb-3" />
        <h2 className='text-xl mb-1'> {title} </h2>
        <p className="text-sm">{name}</p>
      </div>
      {showModal ? <Modal modalShow={showModal} modalClose={() => setShowModal(false)} url={url} /> : null}
    </>
  )
}

export default PDFListItem