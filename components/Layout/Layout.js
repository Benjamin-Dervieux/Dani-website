import React from "react";
import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({ children, pageTitle }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <meta name="description" content="Danielle Desteucq-Roettger website" />
        <title>{pageTitle}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

Layout.displayName = "Layout";

export default Layout;
