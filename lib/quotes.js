import { v4 } from "uuid";
export async function getApiQuotes() {
  const res = await fetch(
    "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
    {
      headers: {
        Accept: "application/json",
      },
    }
  );
  const { quotes } = await res.json();

  const quotesWithId = quotes.map((quote) => {
    return { ...quote, id: v4() };
  });

  return quotesWithId;
}
