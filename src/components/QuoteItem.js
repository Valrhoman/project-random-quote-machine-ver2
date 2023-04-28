import { BsTrash3Fill } from "react-icons/bs";

const QuoteItem = ({ quote, onDelete }) => {
  return (
    <div className="flex text-xs text-gray-900 py-1 px-2 bg-gray-50 hover:bg-gray-200 cursor-default rounded-md group">
      <div
        className={`text-left w-36 px-2 py-2 hidden md:block ${
          quote.author ? "" : "text-slate-300"
        }`}
      >
        {quote.author || "no author"}
      </div>
      <div className="text-left w-64 px-2 py-2">{quote.quote}</div>
      <div className="flex justify-end w-6 py-2">
        <button
          className="flex"
          onClick={() => {
            onDelete(quote.id);
          }}
        >
          <BsTrash3Fill className="text-sm cursor-pointer text-gray-500  group-hover:text-gray-900 hover:text-white text-right" />
        </button>
      </div>
    </div>
  );
};

export default QuoteItem;
