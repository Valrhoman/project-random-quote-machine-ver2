import { motion } from "framer-motion";
import { GoQuote } from "react-icons/go";

export default function QuoteView({ quote }) {
  return (
    <div className=" text-green-700 mb-10 flex flex-col items-center gap-4 md:gap-6">
      <motion.div layout="position">
        <GoQuote
          className="mb-2 text-2xl md:stroke-[0.5] lg:text-4xl
                "
        />
      </motion.div>
      <h3
        className="text-xl font-raleway font-semibold md:text-2xl lg:text-3xl fade-in"
        key={quote?.quote}
      >
        {quote?.quote || "You will succeed, beautiful human."}
      </h3>

      <p
        className="text-base font-raleway font-medium md:text-lg lg:text-xl fade-in"
        key={quote?.author}
      >
        {quote?.author || "Universe"}
      </p>
    </div>
  );
}
