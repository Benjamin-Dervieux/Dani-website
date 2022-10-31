import DisplayHomeImage from "../components/DisplayHomeImage/DisplayHomeImage";
import DisplayName from "../components/DisplayName/DisplayName";
import Footer from "../components/Footer/Footer";
import Layout from "../components/Layout/Layout";
import { Navbar } from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout pageTitle="Home page">
      <div>
        {/* <DisplayName /> */}
        <DisplayHomeImage />
        <Footer />
      </div>
    </Layout>
  );
}
