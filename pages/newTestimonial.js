import Link from "next/link";
import { useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import RatingStar from "../components/RatingStar/RatingStar";

const NewTestimonial = () => {
  const router = useRouter();

  const [rating, setRating] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const [userRating, setUserRating] = useState("");
  const [userTitle, setUserTitle] = useState("");
  const [userContent, setUserContent] = useState("");
  const [userAuthor, setUserAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitle(!title);
    setContent(!content);
    setAuthor(!author);
    setRating(!rating);

    axios
      .post("api/testimonials", {
        rating: userRating,
        title: userTitle,
        content: userContent,
        author: userAuthor,
      })
      .then((response) => {
        console.log(response);
      })
      .then(() => {
        setRating("");
        setUserTitle("");
        setUserContent("");
        setUserAuthor("");
      })
      .then(() => router.push("/testimonials"));
  };

  return (
    <Layout pagetitle="Add a testimonial">
      <div className="mt-28">
        <div className="flex justify-center h-[200px] md:h-[300px] lg:h-[300px] bg-center bg-cover img-addTestimonial"></div>
      </div>

      <h1 className="p-4 text-center text-[1.7em] italic tracking-wide underline">
        Laisser un commentaire
      </h1>

      <div className="mt-8 mb-12">
        <h3 className="text-center text-lg tracking-wide mb-3">
          Évaluez Danielle
        </h3>
        <RatingStar
          value={userRating}
          onChange={(e) => setUserRating(e.target.value)}
        />
      </div>

      <div className="lg:flex flex-row justify-center">
        <form className="flex flex-col lg:mt-16">
          <label
            className="ml-4 mb-2 lg:ml-32 text-lg lg:text-[1.2em]"
            htmlFor="title"
          >
            Titre
          </label>
          <input
            className="w-[355px] lg:w-[600px] h-8 ml-4 lg:ml-32 border-2 rounded-md bg-slate-100 "
            type="text"
            value={userTitle}
            onChange={(e) => setUserTitle(e.target.value)}
          />
          <label
            className="ml-4 mb-4 mt-2 lg:ml-32 text-lg lg:text-[1.2em]"
            htmlFor="content"
          >
            Votre commentaire
          </label>
          <textarea
            className="w-[355px] lg:w-[600px] h-36 ml-4 lg:ml-32 border-2 rounded-md bg-slate-100 "
            name="message"
            required
            value={userContent}
            onChange={(e) => setUserContent(e.target.value)}
          ></textarea>
          <label
            className="ml-4 mb-4 mt-2 lg:ml-32 text-lg lg:text-[1.2em]"
            htmlFor="author"
          >
            Auteur
          </label>
          <input
            className="w-[355px] lg:w-[600px] h-8 ml-4 lg:ml-32 border-2 rounded-md bg-slate-100 "
            type="text"
            required
            value={userAuthor}
            onChange={(e) => setUserAuthor(e.target.value)}
          />

          <div className=" mt-12 mb-16 flex justify-center">
            <Link href="/testimonials">
              <button
                className="w-56 h-10 bg-dani-selected rounded-md text-white"
                type="submit"
                onClick={handleSubmit}
              >
                Envoyer
              </button>
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default NewTestimonial;
