import Button from "../components/Button/Button";
import DisplayHomeImage from "../components/DisplayHomeImage/DisplayHomeImage";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout pageTitle="Home page">
      <div>
        <DisplayHomeImage />
        <Button />
      </div>
    </Layout>
  );
}
