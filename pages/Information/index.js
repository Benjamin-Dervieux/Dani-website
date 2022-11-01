import Image from "next/image";
import React from "react";
import Layout from "../../components/Layout/Layout";
import Button from "../../components/Button/Button";

const Information = () => {
  return (
    <Layout pageTitle="Information">
      <div>
        <h1>Efficacité et flexibilité</h1>
      </div>

      <div>
        <Image
          priority
          quality={100}
          width={100}
          height={100}
          src="/images/photo-info1.jpeg"
          alt="Photo randonneur"
        />
      </div>

      <div>
        <p>
          La formation se fait en ligne, ce qui permet une flexibilité maximum.
          Où que vous soyez, un ordinateur et une connexion internet suffisent à
          assister au cours. Quant aux horaires des cours, vous pourrez les
          gérer d’une semaine sur une autre, selon vos disponibilités.
        </p>
      </div>

      <div>
        <h2>Ma clientèle</h2>
      </div>

      <div>
        <Image
          priority
          quality={100}
          width={100}
          height={100}
          src="/images/photo-client.jpg"
          alt="Photo pouces en l'air"
        />
      </div>

      <div>
        <p>
          Cette formation s’adresse aux personnes ayant appris le français et
          souhaitant améliorer leur niveau dans un objectif professionnel.
          L’enseignement leur permet d’accéder à une meilleure maîtrise de la
          langue et les aide à prendre la parole en français. Il devient ainsi
          possible de communiquer avec des collègues, clients ou prospects
          francophones mais aussi de réaliser des présentations ou encore mener
          des négociations en français.
        </p>
      </div>

      <div>
        <h2>Mes élèves</h2>
      </div>

      <div>
        <Image
          priority
          quality={100}
          width={100}
          height={100}
          src="/images/photo-eleves.jpg"
          alt="Photo cerveau qui brille dans une main"
        />
      </div>

      <div>
        <p>
          Mes « élèves » sont des personnes de nationalités très diverses et
          ayant appris le français. Leur niveau est au minimum A2. La langue
          support des cours peut être l’allemand ou l’anglais. Chaque cours sait
          s’adapter aux besoins de l’élève (domaine d’activité par exemple).
          Nous travaillons avec des supports rédigés dans un français moderne,
          actuel, efficace. Il est également possible de travailler avec les
          supports suggérés par les élèves. Bien sûr, je garantis une
          confidentialité absolue. Selon les besoins et les attentes de l’élève,
          la formation propose un mix de conversation, compréhension et
          expression orales, lecture de textes actuels ou encore traduction.
        </p>
      </div>

      <Button />
    </Layout>
  );
};

export default Information;
