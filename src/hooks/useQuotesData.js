import { useEffect, useState } from "react";

export default function useQuotesData(apiQuotes) {
  const [quotesData, setQuotesData] = useState([]);

  useEffect(() => {
    const storedQuotes = JSON.parse(localStorage.getItem("storedQuotes"));
    setQuotesData(storedQuotes || apiQuotes);
  }, []);

  useEffect(() => {
    if (quotesData.length > 0)
      localStorage.setItem("storedQuotes", JSON.stringify(quotesData));
  }, [quotesData]);

  return [quotesData, setQuotesData];
}
