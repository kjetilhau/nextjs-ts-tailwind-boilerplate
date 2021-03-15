import Head from "next/head";
import React from "react";

const HtmlHead: React.FC = () => {
  const pageTitle = "Next.js TypeScript Tailwind Boilerplate";

  return (
    <Head>
      <html lang="en"></html>
      <title>{pageTitle}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Heebo&family=IBM+Plex+Sans:wght@700&display=swap" rel="stylesheet"></link>
    </Head>
  );
};

export default HtmlHead;
