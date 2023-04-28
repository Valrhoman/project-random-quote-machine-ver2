import Head from "next/head";

export default function Header() {
  return (
    <Head>
      <link rel="icon" href="/favicon2.ico" />
      <title>Random Quote Machine</title>

      <meta
        name="description"
        content="Generate random quote and add your own quotes."
      ></meta>
    </Head>
  );
}
