import React from "react";
import Footer from "../Footer/Footer";
import Head from "../Head/Head";
import Header from "../Header/Header";

const Layout: React.FC = (props) => {
  return (
    <>
      <Head></Head>

      <div className="flex flex-col min-h-screen justify-between bg-gray-800">
        <header className="h-10 bg-gray-700">
          <Header />
        </header>

        <main className="mb-auto flex-grow">{props.children}</main>

        <footer className="h-10 bg-gray-700">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
