import Image from "next/image";
import React from "react";
import style from "../styles/about.module.css";
import Layout from "../components/Layout/Layout";
import { FaGraduationCap } from "react-icons/fa";
import { Gi3DStairs } from "react-icons/gi";
import Button from "../components/Button/Button";

export default function About() {
  return (
    <Layout pageTitle="about">
      <div className="mt-28">
        <div className="flex justify-center h-[200px] md:h-[300px] lg:h-[300px] bg-center bg-cover img-header-about"></div>
      </div>

      <div className="lg:flex flex-row-reverse justify-around items-center">
        <div className="mt-8 flex flex-col items-center lg:self-end">
          <div className="w-80 lg:w-[600px] lg:h-80 border-r-b-l rounded shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-justify p-4">
            <h1 className="p-4 text-center text-[1.7em] italic tracking-wide">
              Qui suis-je ?
            </h1>
            <p>
              Mon expérience est le fruit de nombreuses années de travail avec
              des élèves de tous horizons. Mes études et ma carrière de
              traductrice/interprète DE (allemand-français) m’ont amenée à
              rencontrer de nombreuses personnes regrettant de devoir passer par
              l’intermédiaire d’un interprète pour mener leurs affaires. C’est
              ainsi que j’ai commencé à m’intéresser à l’enseignement du
              français des affaires. C’est un métier passionnant car il permet
              d’aider des personnes à progresser dans leurs compétences et à
              accéder à de nouvelles opportunités professionnelles.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center">
          <div className={style.about}>
            <div className={style.aboutGreen}>
              <div className={style.aboutImg}>
                <Image
                  priority
                  quality={100}
                  width={245}
                  height={245}
                  src="/images/danielle-roettger.png"
                  alt="Photo de profil"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <div className="mt-16">
          <h2 className="text-[1.7em] lg:text-[2em] italic tracking-wide">
            Formation
          </h2>
        </div>
      </div>

      <div className="mt-3 flex flex-col items-center">
        <FaGraduationCap size={35} />
        <div className="mt-3 w-80 lg:w-[800px] text-justify p-4 tracking-wider">
          <ul className="list-disc">
            <li>Diplômée de l’IFAG (Ecole de management - ICG Paris)</li>
            <li>
              Traductrice et interprète diplômée de la Chambre de Commerce et
              d’Industrie de Wiesbaden, (IHK Wiesbaden), Allemagne
            </li>
            <li>
              Diplômée de la Chambre franco-allemande de Commerce et d’Industrie
              de Paris (Spécialité : allemand commercial), Paris, France
            </li>
            <li>Diplômée du Goethe Institut, Francfort, Allemagne</li>
            <li>
              Traductrice diplômée de l’AKAD (Hochschule für Berufstätige),
              Stuttgart, Allemagne
            </li>
            <li>
              Traductrice et Interprète diplômée d’Etat (Ministère de
              l’Education de la Sarre), Sarrebruck, Allemagne
            </li>
            <li>
              Correctrice et rédactrice, Centre d’écriture et de communication,
              Paris
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center">
        <div className="mt-16">
          <h2 className="text-[1.7em] lg:text-[2em] italic tracking-wide">
            Parcours
          </h2>
        </div>
      </div>

      <div className="mt-3 flex flex-col items-center">
        <Gi3DStairs size={35} />
        <div className=" mt-3 w-80 lg:w-[800px] text-justify p-4 tracking-wider">
          <ul className="list-disc">
            <li>Diplômée de l’IFAG (Ecole de management - ICG Paris)</li>
            <li>
              Traductrice et interprète diplômée de la Chambre de Commerce et
              d’Industrie de Wiesbaden, (IHK Wiesbaden), Allemagne
            </li>
            <li>
              Diplômée de la Chambre franco-allemande de Commerce et d’Industrie
              de Paris (Spécialité : allemand commercial), Paris, France
            </li>
            <li>Diplômée du Goethe Institut, Francfort, Allemagne</li>
            <li>
              Traductrice diplômée de l’AKAD (Hochschule für Berufstätige),
              Stuttgart, Allemagne
            </li>
            <li>
              Traductrice et Interprète diplômée d’Etat (Ministère de
              l’Education de la Sarre), Sarrebruck, Allemagne
            </li>
            <li>
              Correctrice et rédactrice, Centre d’écriture et de communication,
              Paris
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-8">
        <Button />
      </div>
    </Layout>
  );
}
