import { motion } from "framer-motion";
import { BsTwitter, BsList } from "react-icons/bs";

export default function ControlsView({ quote, onClickNew, onClickList }) {
  return (
    <div className="font-sans flex gap-2 justify-between text-sm leading-normal">
      <motion.button
        layout="position"
        onClick={onClickList}
        title="View list"
        className="bg-gray-50 text-green-700 flex items-center px-3 rounded-md  border-green-700 border-2 hover:text-white hover:bg-green-700 active:bg-green-950 transition-all duration-300 md:px-4"
      >
        <BsList className="stroke-1 text-xl md:text-lg" />
      </motion.button>

      <motion.div layout className="flex gap-3 box-border">
        <motion.button
          layout="position"
          className="bg-gray-50 text-green-700 font-sans px-4 py-2 rounded-md border-green-700 border-2 hover:text-white hover:bg-green-700 active:bg-green-950 active:border-green-950 transition-all duration-300 md:text-base md:px-6 md:py-3"
          onClick={onClickNew}
        >
          New Quote
        </motion.button>
        <motion.a
          layout="position"
          href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(
            '"' + quote?.quote + '" ' + quote?.author
          )}`}
          target="_blank"
          title="Tweet this quote"
          className="bg-gray-50 flex items-center px-3 rounded-md border-green-700 hover:bg-green-700 active:bg-green-950 transition-all duration-300 group md:px-4 border-2 "
        >
          <BsTwitter className="text-base text-green-700 md:text-lg transition-all duration-300 group-hover:text-white" />
        </motion.a>
      </motion.div>
    </div>
  );
}
