import Image from "next/image";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <div>
        <h1>Qui suis-je ?</h1>
      </div>

      <div>
        <div>
          <p>
            Mon expérience est le fruit de nombreuses années de travail avec des
            élèves de tous horizons. Mes études et ma carrière de
            traductrice/interprète DE (allemand-français) m’ont amenée à
            rencontrer de nombreuses personnes regrettant de devoir passer par
            l’intermédiaire d’un interprète pour mener leurs affaires. C’est
            ainsi que j’ai commencé à m’intéresser à l’enseignement du français
            des affaires. C’est un métier passionnant car il permet d’aider des
            personnes à progresser dans leurs compétences et à accéder à de
            nouvelles opportunités professionnelles.
          </p>
        </div>
      </div>

      <div>
        <div>
          <Image
            priority
            quality={100}
            width={100}
            height={100}
            src="/images/danielle-roettger.png"
            alt="Photo de profil"
          />
        </div>
      </div>

      <div>
        <h2>Formation</h2>
      </div>

      <div>
        <FaGraduationCap size={50} />
      </div>

      <div>
        <ul>
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
            Traductrice et Interprète diplômée d’Etat (Ministère de l’Education
            de la Sarre), Sarrebruck, Allemagne
          </li>
          <li>
            Correctrice et rédactrice, Centre d’écriture et de communication,
            Paris
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
