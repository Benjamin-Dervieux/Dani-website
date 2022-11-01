import React from "react";
import Layout from "../../components/Layout/Layout";
import { BsGeoFill, BsPhoneFill } from "react-icons/bs";
import { HiPencilSquare } from "react-icons/hi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaXingSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Contact = () => {
  return (
    <Layout pageTitle="Contact">
      <div>
        <h1>Prendre rendez-vous avec Danielle Desteucq-Roettger</h1>
      </div>

      {/*form*/}

      <div>
        <form>
          <input type="text" name="lastname" placeholder="Votre nom" required />
          <input
            type="text"
            name="firstname"
            placeholder="Votre prénom"
            required
          />
          <input type="text" name="email" placeholder="Votre e-mail" required />
          <input
            type="number"
            name="telephone"
            placeholder="Votre numéro de téléphone"
            required
          />
          <input type="text" name="subject" placeholder="Sujet" required />
          <textarea name="message" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>

      {/*card - contact*/}

      <div>
        <div>
          <HiPencilSquare size={20} />
          <h2>Contact</h2>
        </div>
        <div className="flex justify-around items-center">
          <BsGeoFill size={20} />
          <p>Lyon</p>
        </div>
        <div className="flex justify-around items-center">
          <BsPhoneFill size={20} />
          <p>00 33 30 30 30 30</p>
        </div>
      </div>

      {/*card - email*/}

      <div>
        <div>
          <MdEmail size={20} />
          <h3>Email</h3>
          <p>contact@danielle-roettger.fr</p>
          <Link href="/contact">Envoyez-moi un email</Link>
        </div>
      </div>

      {/*card - linkedin*/}

      <div>
        <div>
          <AiOutlineLinkedin size={20} />
          <h3>Linkedin</h3>
          <p>Danielle Desteucq-Roettger</p>
          <Link href="https://www.linkedin.com/in/danielle-desteucq-r%C3%B6ttger-219b6328/">
            Mon profil linkedin
          </Link>
        </div>
      </div>

      {/*card - xing*/}

      <div>
        <div>
          <FaXingSquare size={20} />
          <h3>Xing</h3>
          <p>Danielle Desteucq-Roettger</p>
          <Link href="https://www.xing.com/profile/Danielle_DesteucqRoettger">
            Mon profil xing
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
