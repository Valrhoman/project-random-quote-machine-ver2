import { motion } from "framer-motion";
import { Raleway } from "next/font/google";

import Header from "@/components/Header";
import QuoteView from "@/components/Views/QuoteView.js";
import ControlsView from "@/components/Views/ControlsView.js";
import Footer from "@/components/Footer";

import useQuotesData from "@/hooks/useQuotesData.js";
import { getApiQuotes } from "../../lib/quotes";
import { useState, createContext, useEffect } from "react";
import QuotesListView from "@/components/Views/QuotesListView";
// import Modal from "@/components/Modal.js";
// import Form from "@/components/Form.js";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-raleway",
});

export const QuotesContext = createContext(null);

export default function Home({ apiQuotes }) {
  const [quotesData, setQuotesData] = useQuotesData(apiQuotes);
  const [quote, setQuote] = useState({});
  const [openList, setOpenList] = useState(false);

  function handleClickNew() {
    //Generate random quote and store to state
    setQuote(quotesData[Math.floor(Math.random() * quotesData.length)]);
  }

  function handleClickList() {
    setOpenList(true);
  }

  return (
    <div>
      <Header />
      <main
        className={`bg-gradient-to-br from-green-400 to-green-800 h-screen flex flex-col justify-center items-center ${raleway.variable}`}
      >
        <motion.section
          layout
          // transition={{ duration: 1 }}
          className="bg-white p-10 pt-8 mx-5 flex flex-col gap-4 rounded-lg shadow-2xl text-center md:px-20 md:mx-20 lg:px-40 lg:mx-36 max-w-4xl"
        >
          <QuoteView quote={quote} />
          <ControlsView
            quote={quote}
            onClickNew={handleClickNew}
            onClickList={handleClickList}
          />
        </motion.section>

        {/* <AddQuoteModal quotes={allQuotesData} />
         */}

        {/* 
        
          <div className="text-center w-96 text-gray-900 font-sans">
            <Form onSubmit={handleSubmit} />
          </div>
        </Modal> */}
        <QuotesContext.Provider value={[quotesData, setQuotesData]}>
          <QuotesListView open={openList} onClose={() => setOpenList(false)} />
        </QuotesContext.Provider>
        <Footer />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const apiQuotes = await getApiQuotes();
  return {
    props: {
      apiQuotes,
    },
  };
}
