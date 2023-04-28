import { useContext, useState } from "react";
import Modal from "../Modal";
import { QuotesContext } from "@/pages";
import { v4 } from "uuid";

export default function AddQuoteView({ open, setOpen, onClose }) {
  const [quotesData, setQuotesData] = useContext(QuotesContext);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    setQuotesData([{ ...formJson, id: v4() }, ...quotesData]);
    setOpen(false);
    form.reset();
  }

  return (
    <Modal open={open} onClose={onClose}>
      <form
        className="flex flex-col justify-center items-center text-center text-sm"
        onSubmit={handleSubmit}
      >
        <label className="py-2">
          <p>Quote</p>
          <textarea
            name="quote"
            className="form-input self-stretch"
            placeholder="input text"
            autoFocus
            required
          ></textarea>
        </label>
        <label className="py-2">
          <p>Author</p>
          <input
            name="author"
            className="form-input"
            placeholder="input text"
          ></input>
        </label>
        <button className="bg-green-700 rounded-md text-white py-2 mt-3 self-stretch hover:bg-green-900 transition-all">
          Add
        </button>
      </form>
    </Modal>
  );
}
