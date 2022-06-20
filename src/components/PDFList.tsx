import IPDFList from "../models/PDFList.model";
import PDFListItem from "./PDFListItem";

interface PDFLists {
  lists: IPDFList[]
}

const PDFList: React.FC<PDFLists> = ({ lists }: PDFLists) => {
  return (
    <div className="grid gap-6 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {lists?.map((list, i) => {
        return <PDFListItem key={i} title={list.title} url={list.url} name={list.name} description={list.description} path={list.path} tags={list.tags} />
      })}

    </div>
  )
}

export default PDFList