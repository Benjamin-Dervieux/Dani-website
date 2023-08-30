import Layout from "../components/Layout/Layout";
import { BsGeoFill, BsPhoneFill, BsPersonCircle } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaXingSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import en from "../public/locales/en/en";
import fr from "../public/locales/fr/fr";
import de from "../public/locales/de/de";

const Contact = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : locale === "de" ? de : fr;

  const [formStatus, setFormStatus] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const emailData = {
      to: "contact@danielle-roettger.fr",
      subject: formData.get("subject"),
      text: formData.get("message"),
    };

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (response.ok) {
        setFormStatus("success");
        e.target.reset();
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setFormStatus("error");
    }
  };

  return (
    <Layout pageTitle="Contact">
      <div className="mt-28">
        <div className="flex justify-center h-[200px] md:h-[300px] lg:h-[300px] bg-center bg-cover img-header-contact"></div>
      </div>

      <div className="mt-8">
        <h1 className="text-[1.7em] text-center italic tracking-wide">
          {t.titleContact}
        </h1>
      </div>

      <div className="lg:flex flex-row-reverse justify-center lg:ml-40 lg:mt-8 lg:mb-20">
        <form className="flex flex-col lg:mt-16">
          <label
            className="ml-4 mb-4 lg:ml-32 text-lg lg:text-[1.2em]"
            htmlFor="lastname"
          >
            {t.lastname}
          </label>
          <input
            className="w-[355px] lg:w-[600px] h-8 ml-4 lg:ml-32 border-2 rounded-md bg-slate-100 "
            type="text"
            name="lastname"
            id="lastname"
            required
          />
          <label
            className="ml-4 lg:ml-32 mt-4 mb-2 text-lg lg:text-[1.2em]"
            htmlFor="firstname"
          >
            {t.firstname}
          </label>
          <input
            className="w-[355px] lg:w-[600px] h-8 ml-4 lg:ml-32 border-2 rounded-md bg-slate-100 "
            type="text"
            name="firstname"
            id="firstname"
            required
          />
          <label
            className="ml-4 lg:ml-32 mt-4 mb-2 text-lg lg:text-[1.2em]"
            htmlFor="email"
          >
            {t.email}
          </label>
          <input
            className="w-[355px] lg:w-[600px] h-8 ml-4 lg:ml-32 border-2 rounded-md bg-slate-100 "
            type="text"
            name="email"
            id="email"
            autoComplete="your-email"
            required
          />
          <label
            className="ml-4 lg:ml-32 mt-4 mb-2 text-lg lg:text-[1.2em]"
            htmlFor="telephone"
          >
            {t.telC}
          </label>
          <input
            className="w-[355px] lg:w-[600px] h-8 ml-4 lg:ml-32 border-2 rounded-md bg-slate-100 "
            type="number"
            name="telephone"
            id="telephone"
            required
          />
          <label
            className="ml-4 lg:ml-32 mt-4 mb-2 text-lg lg:text-[1.2em]"
            htmlFor="subject"
          >
            {t.subject}
          </label>
          <input
            className="w-[355px] lg:w-[600px] h-8 ml-4 lg:ml-32 border-2 rounded-md bg-slate-100 "
            type="text"
            name="subject"
            id="subject"
            required
          />
          <label
            className="ml-4 lg:ml-32 mt-4 mb-2 text-lg lg:text-[1.2em]"
            htmlFor="message"
          >
            {t.message}
          </label>
          <textarea
            className="w-[355px] lg:w-[600px] h-36 ml-4 lg:ml-32 border-2 rounded-md bg-slate-100 "
            name="message"
            id="message"
            required
          ></textarea>

          <div className=" mt-6 flex justify-center">
            <button
              className="w-56 h-10 bg-dani-selected rounded-md text-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
              type="submit"
            >
              {t.send}
            </button>
          </div>
          {formStatus === "success" && (
            <p className="text-green-600 mt-4 text-center">
              Message sent successfully!
            </p>
          )}

          {formStatus === "error" && (
            <p className="text-red-600 mt-4 text-center">
              An error occurred. Please try again later.
            </p>
          )}
        </form>

        <div>
          <div className="flex justify-center">
            <div className="mt-8 w-80 h-72 border-2 border-dani-green rounded-xl shadow-[rgba(0,_0,_0,_0.30)_0px_10px_8px]">
              <div className="w-[316px] h-20 bg-dani-green flex rounded-t-lg flex-col justify-center items-center">
                <div className="text-white text-lg">
                  <div className="flex justify-center">
                    <BsPencilSquare size={35} />
                  </div>
                  <h2>{t.contact}</h2>
                </div>
              </div>
              <div className="w-80 h-52 flex flex-col justify-around">
                <div className="ml-6 flex items-center text-lg">
                  <div className="text-dani-selected">
                    <BsPersonCircle size={35} />
                  </div>
                  <p className="ml-3">{t.nameC}</p>
                </div>
                <div className="ml-6 flex items-center text-lg">
                  <div className="text-dani-selected">
                    <BsGeoFill size={35} />
                  </div>
                  <p className="ml-3">{t.lyonC}</p>
                </div>
                <div className="ml-6 flex items-center text-lg">
                  <div className="text-dani-selected">
                    <BsPhoneFill size={35} />
                  </div>
                  <p className="ml-3">{t.telCon}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 mb-8 h-[500px] flex flex-col justify-between items-center">
            <div className="w-80 h-36 bg-dani-green rounded-md flex flex-col justify-around shadow-[rgba(0,_0,_0,_0.30)_0px_10px_8px]">
              <div>
                <div className="flex justify-center items-center text-white">
                  <MdEmail size={35} />
                  <h3 className="ml-4 text-lg">{t.mail}</h3>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-lg text-white">{t.emailAdresse}</p>
                  <div className="text-lg text-white underline">
                    <Link href="/contact">{t.mailP}</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-80 h-36 bg-dani-green rounded-md flex flex-col justify-around shadow-[rgba(0,_0,_0,_0.30)_0px_10px_8px]">
              <div>
                <div className="flex justify-center items-center text-white">
                  <AiOutlineLinkedin size={35} />
                  <h3 className="ml-4 text-lg">{t.linkedin}</h3>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-lg text-white">{t.linkedinP}</p>
                  <div className="text-lg text-white underline">
                    <Link href="https://www.linkedin.com/in/danielle-desteucq-r%C3%B6ttger-219b6328/">
                      {t.linkedinL}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-80 h-36 bg-dani-green rounded-md flex flex-col justify-around shadow-[rgba(0,_0,_0,_0.30)_0px_10px_8px]">
              <div>
                <div className="flex justify-center items-center text-white">
                  <FaXingSquare size={35} />
                  <h3 className="ml-4 text-lg">{t.xing}</h3>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-lg text-white">{t.xingP}</p>
                  <div className="text-lg text-white underline">
                    <Link
                      className="text-lg text-white"
                      href="https://www.xing.com/profile/Danielle_DesteucqRoettger"
                    >
                      {t.xingL}
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

export default Contact;
