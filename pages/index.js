import Button from "../components/Button/Button";
import DisplayHomeImage from "../components/DisplayHomeImage/DisplayHomeImage";
import Layout from "../components/Layout/Layout";

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
