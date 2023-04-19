import Head from "next/head";
import { useState } from "react";
import { Inter } from "next/font/google";
import { BsTwitter } from "react-icons/bs";
import { GoQuote } from "react-icons/go";
import { getQuotesData } from "../../lib/quotes.js";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "--font-roboto",
// });

export default function Home({ allQuotesData }) {
  const [quote, setQuote] = useState({});

  function getRandomQuote() {
    return allQuotesData.quotes[
      Math.floor(Math.random() * allQuotesData.quotes.length)
    ];
  }

  // let randomQuote = getRandomQuote();

  // let currentQuote = randomQuote.quote;
  // let currentAuthor = randomQuote.author;

  function handleClick() {
    console.log(quote);
    const randomQuote = getRandomQuote();
    setQuote(randomQuote);
    console.log(randomQuote);
  }

  return (
    <div>
      <Head>
        <title>Random Quote Machine</title>
        <meta name="description" content="content"></meta>
      </Head>
      <main
        className={`bg-gradient-to-br from-green-400 to-green-800 h-screen flex flex-col justify-center items-center ${inter.variable}`}
      >
        <section className="bg-white p-10 pt-8 mx-5 flex flex-col gap-4 rounded-lg shadow-2xl text-center md:px-20 md:mx-20 lg:px-40 lg:mx-36 max-w-4xl">
          <div className=" text-green-700 mb-10 flex flex-col items-center gap-4 md:gap-6">
            <GoQuote className="mb-2 text-2xl md:stroke-[0.5] lg:text-4xl" />

            <h3
              className="text-xl font-raleway font-semibold md:text-2xl lg:text-3xl animate-fade-in"
              key={quote.quote}
            >
              {quote.quote || "You will succeed, beautiful human."}
            </h3>

            <p
              className="text-base font-raleway font-medium md:text-lg lg:text-xl animate-fade-in"
              key={quote.author}
            >
              {quote.author || "Universe"}
            </p>
          </div>
          <div className="font-sans flex gap-2 justify-between text-sm leading-normal">
            <a
              href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(
                '"' + quote.quote + '" ' + quote.author
              )}`}
              target="_blank"
              className="bg-green-700 text-white flex items-center px-3 rounded-md md:px-4 hover:bg-green-900 active:bg-green-950 transition-colors duration-300"
            >
              <BsTwitter className="text-base md:text-lg" />
            </a>
            <button
              className="bg-green-700 text-white font-sans px-4 py-2 rounded-md md:text-base md:px-6 md:py-3 hover:bg-green-900 active:bg-green-950 transition-colors duration-300 "
              onClick={handleClick}
            >
              New Quote
            </button>
          </div>
        </section>
        <small className="text-green-50 translate-y-3 text-xs">by Alrho</small>
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
