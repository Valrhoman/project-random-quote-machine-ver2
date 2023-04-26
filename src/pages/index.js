import Head from "next/head";
import { useState } from "react";

import { Raleway } from "next/font/google";
import { BsTwitter } from "react-icons/bs";
import { GoQuote } from "react-icons/go";
import { getQuotesData } from "../../lib/quotes.js";

import { motion } from "framer-motion";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-raleway",
});

export default function Home({ allQuotesData }) {
  const [quote, setQuote] = useState({});

  function getRandomQuote() {
    return allQuotesData.quotes[
      Math.floor(Math.random() * allQuotesData.quotes.length)
    ];
  }

  function handleClick() {
    console.log(quote);
    const randomQuote = getRandomQuote();
    setQuote(randomQuote);
    console.log(randomQuote);
  }

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon2.ico" />
        <title>Random Quote Machine</title>

        <meta name="description" content="Generate random quotes"></meta>
      </Head>
      <main
        className={`bg-gradient-to-br from-green-400 to-green-800 h-screen flex flex-col justify-center items-center ${raleway.variable}`}
      >
        <motion.section
          layout
          // transition={{ duration: 1 }}
          className="bg-white p-10 pt-8 mx-5 flex flex-col gap-4 rounded-lg shadow-2xl text-center md:px-20 md:mx-20 lg:px-40 lg:mx-36 max-w-4xl"
        >
          <div className=" text-green-700 mb-10 flex flex-col items-center gap-4 md:gap-6">
            <motion.div layout="position">
              <GoQuote className="mb-2 text-2xl md:stroke-[0.5] lg:text-4xl" />
            </motion.div>

            <h3
              className="text-xl font-raleway font-semibold md:text-2xl lg:text-3xl fade-in"
              key={quote.quote}
            >
              {quote.quote || "You will succeed, beautiful human."}
            </h3>

            <p
              className="text-base font-raleway font-medium md:text-lg lg:text-xl fade-in"
              key={quote.author}
            >
              {quote.author || "Universe"}
            </p>
          </div>
          <div className="font-sans flex gap-2 justify-between text-sm leading-normal">
            <motion.a
              layout="position"
              href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(
                '"' + quote.quote + '" ' + quote.author
              )}`}
              target="_blank"
              className="bg-green-700 text-white flex items-center px-3 rounded-md md:px-4 hover:bg-green-900 active:bg-green-950 transition-colors duration-300"
            >
              <BsTwitter className="text-base md:text-lg" />
            </motion.a>
            <motion.button
              layout="position"
              className="bg-green-700 text-white font-sans px-4 py-2 rounded-md md:text-base md:px-6 md:py-3 hover:bg-green-900 active:bg-green-950 transition-colors duration-300 "
              onClick={handleClick}
            >
              New Quote
            </motion.button>
          </div>
        </motion.section>
        <motion.small
          layout
          className="text-green-50 font-raleway mt-3 text-xs lg:mt-4"
        >
          by Alrho
        </motion.small>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const allQuotesData = await getQuotesData();
  return {
    props: {
      allQuotesData,
    },
  };
}
