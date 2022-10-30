import Footer from "../components/Footer/Footer";
import { Navbar } from "../components/Navbar/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
