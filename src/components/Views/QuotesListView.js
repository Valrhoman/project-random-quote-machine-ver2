import { useState, useContext } from "react";
import Modal from "../Modal.js";
import QuoteItem from "../QuoteItem.js";
import AddQuoteView from "./AddQuoteView.js";
import { QuotesContext } from "@/pages";

export default function QuotesListView({ open, onClose, onReset }) {
  const [openAdd, setOpenAdd] = useState(false);
  const [quotesData, setQuotesData] = useContext(QuotesContext);
  const [edit, setEdit] = useState(-1);

  function handleClickAdd() {
    setOpenAdd(true);
  }

  function handleEdit(id) {
    console.log("idit idit", id);
  }
  function handleDelete(id) {
    console.log(quotesData);
    setQuotesData(quotesData.filter((quote) => quote.id !== id));
  }

  function handleReset(e) {
    onReset(e);
    setEdit(-1);
  }

  return (
    <Modal
      open={open}
      onClose={() => {
        onClose();
        setEdit(-1);
      }}
    >
      <div className="px-2 py-2 mb-2 flex justify-between">
        <h2 className="text-lg font-bold">Quotes List</h2>
        <button
          onClick={handleClickAdd}
          className="bg-green-700 rounded-md py-2 px-3 text-xs text-white hover:bg-green-900 transition-all font-sans leading-none"
        >
          Add a quote
        </button>
      </div>
      <div className="overflow-auto max-h-96 flex flex-col gap-1 mb-4">
        {quotesData.map((quote) => {
          return (
            <QuoteItem
              key={quote.id}
              quote={quote}
              onDelete={handleDelete}
              onEdit={handleEdit}
              edit={edit}
              setEdit={setEdit}
            />
          );
        })}
      </div>

      <button
        onClick={handleReset}
        className="bg-gray-600 rounded-md py-2 px-3 text-xs text-white hover:bg-gray-900 transition-all font-sans leading-none"
      >
        Restore default
      </button>

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
