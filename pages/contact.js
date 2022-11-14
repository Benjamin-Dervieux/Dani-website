import Layout from "../components/Layout/Layout";
import { BsGeoFill, BsPhoneFill, BsPersonCircle } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaXingSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const contact = () => {
  return (
    <Layout pageTitle="Contact">
      <div className="mt-28">
        <div className="flex justify-center h-[200px] md:h-[300px] lg:h-[300px] bg-center bg-cover img-header-contact"></div>
      </div>

      <div className="mt-8">
        <h1 className="text-[1.7em] text-center italic tracking-wide">
          Prendre rendez-vous avec Danielle Desteucq-Roettger
        </h1>
      </div>

      <div className="lg:flex flex-row-reverse justify-center lg:ml-40 lg:mt-8 lg:mb-20">
        <form className="flex flex-col lg:mt-16">
          <label
            className="ml-4 mb-4 lg:ml-32 text-lg lg:text-[1.2em]"
            htmlFor="lastname"
          >
            Nom
          </label>
          <input
            className="w-[355px] lg:w-[600px] h-8 ml-4 lg:ml-32 border-2 rounded-md bg-slate-100 "
            type="text"
            name="lastname"
            required
          />
          <label
            className="ml-4 lg:ml-32 mt-4 mb-2 text-lg lg:text-[1.2em]"
            htmlFor="firstname"
          >
            Prénom
          </label>
          <input
            className="w-[355px] lg:w-[600px] h-8 ml-4 lg:ml-32 border-2 rounded-md bg-slate-100 "
            type="text"
            name="firstname"
            required
          />
          <label
            className="ml-4 lg:ml-32 mt-4 mb-2 text-lg lg:text-[1.2em]"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-[355px] lg:w-[600px] h-8 ml-4 lg:ml-32 border-2 rounded-md bg-slate-100 "
            type="text"
            name="email"
            required
          />
          <label
            className="ml-4 lg:ml-32 mt-4 mb-2 text-lg lg:text-[1.2em]"
            htmlFor="telephone"
          >
            Téléphone
          </label>
          <input
            className="w-[355px] lg:w-[600px] h-8 ml-4 lg:ml-32 border-2 rounded-md bg-slate-100 "
            type="number"
            name="telephone"
            required
          />
          <label
            className="ml-4 lg:ml-32 mt-4 mb-2 text-lg lg:text-[1.2em]"
            htmlFor="subject"
          >
            Sujet
          </label>
          <input
            className="w-[355px] lg:w-[600px] h-8 ml-4 lg:ml-32 border-2 rounded-md bg-slate-100 "
            type="text"
            name="subject"
            required
          />
          <label
            className="ml-4 lg:ml-32 mt-4 mb-2 text-lg lg:text-[1.2em]"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="w-[355px] lg:w-[600px] h-36 ml-4 lg:ml-32 border-2 rounded-md bg-slate-100 "
            name="message"
            required
          ></textarea>

          <div className=" mt-6 flex justify-center">
            <button
              className="w-56 h-10 bg-dani-selected rounded-md text-white"
              type="submit"
            >
              Envoyer
            </button>
          </div>
        </form>

        <div>
          <div className="flex justify-center">
            <div className="mt-8 w-80 h-72 border-2 border-dani-green rounded-xl">
              <div className="w-[316px] h-20 bg-dani-green flex rounded-t-lg flex-col items-center">
                <div className="text-white text-lg">
                  <BsPencilSquare size={35} />
                  <h2>Contact</h2>
                </div>
              </div>
              <div className="w-80 h-52 flex flex-col justify-around">
                <div className="ml-6 flex items-center text-lg">
                  <div className="text-dani-selected">
                    <BsPersonCircle size={35} />
                  </div>
                  <p className="ml-3">Danielle Desteucq - Roettger</p>
                </div>
                <div className="ml-6 flex items-center text-lg">
                  <div className="text-dani-selected">
                    <BsGeoFill size={35} />
                  </div>
                  <p className="ml-3">Lyon</p>
                </div>
                <div className="ml-6 flex items-center text-lg">
                  <div className="text-dani-selected">
                    <BsPhoneFill size={35} />
                  </div>
                  <p className="ml-3">+33 6 74 81 19 75 </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 mb-8 h-[500px] flex flex-col justify-between items-center">
            <div className="w-80 h-36 bg-dani-green rounded-md flex flex-col justify-around">
              <div>
                <div className="flex justify-center items-center text-white">
                  <MdEmail size={35} />
                  <h3 className="ml-4 text-lg">Email</h3>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-lg text-white">
                    contact@danielle-roettger.fr
                  </p>
                  <div className="text-lg text-white underline">
                    <Link href="/contact">Envoyez-moi un email</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-80 h-36 bg-dani-green rounded-md flex flex-col justify-around">
              <div>
                <div className="flex justify-center items-center text-white">
                  <AiOutlineLinkedin size={35} />
                  <h3 className="ml-4 text-lg">Linkedin</h3>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-lg text-white">
                    Danielle Desteucq-Roettger
                  </p>
                  <div className="text-lg text-white underline">
                    <Link href="https://www.linkedin.com/in/danielle-desteucq-r%C3%B6ttger-219b6328/">
                      Mon profil linkedin
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-80 h-36 bg-dani-green rounded-md flex flex-col justify-around">
              <div>
                <div className="flex justify-center items-center text-white">
                  <FaXingSquare size={35} />
                  <h3 className="ml-4 text-lg">Xing</h3>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-lg text-white">
                    Danielle Desteucq-Roettger
                  </p>
                  <div className="text-lg text-white underline">
                    <Link
                      className="text-lg text-white"
                      href="https://www.xing.com/profile/Danielle_DesteucqRoettger"
                    >
                      Mon profil xing
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default contact;
