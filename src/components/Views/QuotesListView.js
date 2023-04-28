import { useState, useContext } from "react";
import Modal from "../Modal.js";
import QuoteItem from "../QuoteItem.js";
import AddQuoteView from "./AddQuoteView.js";
import { QuotesContext } from "@/pages";

export default function QuotesListView({ open, onClose }) {
  const [openAdd, setOpenAdd] = useState(false);
  const [quotesData, setQuotesData] = useContext(QuotesContext);

  function handleClickAdd() {
    setOpenAdd(true);
  }

  function handleDelete(id) {
    console.log("dilit dilti", id);
    console.log(quotesData);
    setQuotesData(quotesData.filter((quote) => quote.id !== id));
  }

  return (
    <Modal open={open} onClose={onClose}>
      <div className="px-2 py-2 mb-2 flex justify-between">
        <h2 className="text-lg font-bold">Quotes List</h2>
        <button
          onClick={handleClickAdd}
          className="bg-green-700 rounded-md py-2 px-3 text-xs text-white hover:bg-green-900"
        >
          Add a quote
        </button>
      </div>
      <div className=" overflow-auto max-h-96 flex flex-col gap-1 mb-4">
        {quotesData.map((quote) => {
          return (
            <QuoteItem key={quote.id} quote={quote} onDelete={handleDelete} />
          );
        })}
      </div>

      <AddQuoteView
        open={openAdd}
        setOpen={setOpenAdd}
        onClose={() => {
          setOpenAdd(false);
        }}
      />
    </Modal>
  );
}
