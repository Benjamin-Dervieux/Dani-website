import React from "react";
import Head from "next/head";
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ children, pageTitle }) {
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
}
