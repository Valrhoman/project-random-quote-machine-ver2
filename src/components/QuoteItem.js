import { useContext } from "react";
import { BsTrash3Fill, BsCheck2, BsX } from "react-icons/bs";
import { QuotesContext } from "@/pages";

import { motion } from "framer-motion";

const QuoteItem = ({ quote, onDelete, edit, setEdit }) => {
  const [quotesData, setQuotesData] = useContext(QuotesContext);

  function handleEdit() {
    setEdit(quote.id);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    setQuotesData(
      quotesData.map((item) => {
        if (item.id === quote.id) {
          return { ...formJson, id: quote.id };
        } else return item;
      })
    );
    setEdit(-1);
  }

  return (
    <motion.div
      onClick={handleEdit}
      className={`flex text-xs text-gray-900 py-1 px-2 gap-2 bg-gray-50 hover:bg-gray-200 cursor-pointer rounded-md group ${
        edit === quote.id ? "bg-gray-400 hover:bg-gray-400" : ""
      }`}
    >
      {edit === quote.id ? (
        <>
          <motion.form
            id="edit-form"
            layout
            onSubmit={handleSubmit}
            className="flex flex-col-reverse justify-center md:flex-row md:gap-1 "
          >
            <motion.label>
              <motion.input
                className="w-36 p-1 focus:outline-gray-700 rounded-sm"
                type="text"
                name="author"
                defaultValue={quote.author}
              ></motion.input>
            </motion.label>
            <motion.label>
              {/* <input
              className="w-60 p-2"
              type="text"
              name="quote"
              value={quote.quote}
            ></input> */}
              <motion.textarea
                className="w-60 p-1 focus:outline-gray-700 rounded-sm"
                name="quote"
                defaultValue={quote.quote}
              ></motion.textarea>
            </motion.label>
          </motion.form>
        </>
      ) : (
        <>
          <motion.div
            className={`text-left w-36 px-2 py-2 hidden md:block ${
              quote.author ? "" : "text-slate-300"
            }`}
          >
            {quote.author || "no author"}
          </motion.div>
          <motion.div className="text-left w-60 px-2 py-2">
            {quote.quote}
          </motion.div>
        </>
      )}

      <div className={`flex justify-center`}>
        {(edit === quote.id && (
          <div className="flex flex-col self-center">
            <button
              title="cancel"
              onClick={(e) => {
                e.stopPropagation();
                setEdit(-1);
              }}
              className="flex justify-center items-center text-white hover:text-gray-700 transition-all"
            >
              <BsX className="text-2xl" />
            </button>
            <button
              type="submit"
              form="edit-form"
              title="confirm"
              className="flex justify-center items-center text-white hover:text-gray-700 transition-all"
            >
              <BsCheck2 className="text-xl" />
            </button>
          </div>
        )) || (
          <button
            className="flex py-2"
            onClick={() => {
              onDelete(quote.id);
            }}
          >
            <BsTrash3Fill className="text-sm cursor-pointer text-gray-500  group-hover:text-gray-900 text-right" />
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default QuoteItem;
