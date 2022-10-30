import DisplayName from "../components/DisolayName/DisplayName";
import Layout from "../components/Layout/Layout";
import { Navbar } from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout pageTitle="Home page">
      <div className={styles.mainContainer}>
        {/* <DisplayName /> */}
        <Navbar />
      </div>
    </Layout>
  );
}
