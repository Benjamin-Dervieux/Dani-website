import Image from "next/image";
import React from "react";
import Layout from "../components/Layout/Layout";
import Button from "../components/Button/Button";

const Information = () => {
  return (
    <Layout pageTitle="Information">
      <div className="mt-28">
        <div className="flex justify-center h-[200px] md:h-[300px] lg:h-[300px] bg-center bg-cover img-header-info"></div>
      </div>

      <div>
        <h1 className="p-4 text-center text-[1.7em] italic tracking-wide underline">
          Efficacité et flexibilité
        </h1>

        <div className="mt-8 flex flex-col items-center lg:flex-row justify-around">
          <div className="mt-5">
            <Image
              className="rounded-lg"
              priority
              quality={100}
              width={300}
              height={200}
              src="/images/photo-info1.jpeg"
              alt="Photo randonneur"
            />
          </div>

          <div className="mt-8 w-80 lg:w-[600px] text-justify">
            <p className="text-[1.2em]">
              La formation se fait en ligne, ce qui permet une flexibilité
              maximum. Où que vous soyez, un ordinateur et une connexion
              internet suffisent à assister au cours. Quant aux horaires des
              cours, vous pourrez les gérer d’une semaine sur une autre, selon
              vos disponibilités.
            </p>
          </div>
        </div>

        <h2 className="mt-10 p-4 text-center text-[1.7em] italic tracking-wide underline">
          Ma clientèle
        </h2>

        <div className="mt-8 flex flex-col items-center lg:flex-row-reverse justify-around">
          <div className="mt-5">
            <Image
              className="rounded-lg"
              priority
              quality={100}
              width={300}
              height={200}
              src="/images/photo-client.jpg"
              alt="Photo pouces en l'air"
            />
          </div>

          <div className="mt-8 w-80 lg:w-[600px] text-justify">
            <p className="text-[1.2em]">
              Cette formation s’adresse aux personnes ayant appris le français
              et souhaitant améliorer leur niveau dans un objectif
              professionnel. L’enseignement leur permet d’accéder à une
              meilleure maîtrise de la langue et les aide à prendre la parole en
              français. Il devient ainsi possible de communiquer avec des
              collègues, clients ou prospects francophones mais aussi de
              réaliser des présentations ou encore mener des négociations en
              français.
            </p>
          </div>
        </div>

        <h2 className="mt-10 p-4 text-center text-[1.7em] italic tracking-wide underline">
          Mes élèves
        </h2>

        <div className="mt-8 flex flex-col items-center lg:flex-row justify-around">
          <div className="mt-5">
            <Image
              className="rounded-lg"
              priority
              quality={100}
              width={300}
              height={200}
              src="/images/photo-eleves.jpg"
              alt="Photo cerveau qui brille dans une main"
            />
          </div>

          <div className="mt-8 mb-16 w-80 lg:w-[600px] text-justify">
            <p className="text-[1.2em]">
              Mes « élèves » sont des personnes de nationalités très diverses et
              ayant appris le français. Leur niveau est au minimum A2. La langue
              support des cours peut être l’allemand ou l’anglais. Chaque cours
              sait s’adapter aux besoins de l’élève (domaine d’activité par
              exemple). Nous travaillons avec des supports rédigés dans un
              français moderne, actuel, efficace. Il est également possible de
              travailler avec les supports suggérés par les élèves. Bien sûr, je
              garantis une confidentialité absolue. Selon les besoins et les
              attentes de l’élève, la formation propose un mix de conversation,
              compréhension et expression orales, lecture de textes actuels ou
              encore traduction.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <Button />
        </div>
      </div>
    </Layout>
  );
};

export default Information;
