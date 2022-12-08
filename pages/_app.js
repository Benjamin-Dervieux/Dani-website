import { TestimonialProvider } from "../context/testimonialContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TestimonialProvider>
        <Component {...pageProps} />
      </TestimonialProvider>
    </>
  );
}

export default MyApp;
