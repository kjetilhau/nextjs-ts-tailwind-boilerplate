import React, { PropsWithChildren } from "react";
import Footer from "../Footer/Footer";
import Head from "next/head";
import Header from "../Header/Header";

const Layout: React.FC<PropsWithChildren<{}>> = (props) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#FFF" />
        <meta name="msapplication-TileColor" content="#FFF" />
        <meta name="theme-color" content="#FFF"></meta>
      </Head>

      <div className="flex flex-col justify-between min-h-screen bg-gray-800">
        <header className="h-10 bg-gray-700">
          <Header />
        </header>

        <main className="flex-grow mb-auto">{props.children}</main>

        <footer className="h-10 bg-gray-700">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
