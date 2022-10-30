import Head from "next/head";
import style from "./Layout.module.css";

export default function Layout({ children, pageTitle }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <meta name="description" content="Danielle Desteucq-Roettger website" />
        <title>{pageTitle}</title>
      </Head>

      {children}
    </div>
  );
}
