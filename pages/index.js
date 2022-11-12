import Button from "../components/Button/Button";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout pageTitle="Home page">
      <div className="flex flex-col justify-center items-center h-[685px] md:h-[815px] lg:h-[815px] bg-fixed bg-center bg-cover custom-img">
        <div className="  bg-black/10" />
        <div className=" p-5 text-center text-white z-[2]">
          <h1 className="text-[1.9em] text-center italic tracking-wide">
            Cours de français des affaires en ligne
          </h1>
          <p className="py-5 text-lg">
            Danielle Desteucq-Roettger Translator - Interpreter
          </p>
        </div>

        <div>
          <Button />
        </div>
      </div>
    </Layout>
  );
}
