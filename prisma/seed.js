const db = require("../db");

const seed = async () => {
  await db.testimonials.deleteMany();
  await db.testimonials.createMany({
    data: [
      {
        rating: 5,
        title: "My experience",
        content:
          "I have known Danielle for 3 years as my French teacher. I always look forward to and thoroughly enjoy my lessons. Danielle has a great capacity for combining instruction with a very approachable nature which has the effect of creating an environment which is very conducive to learning. You always feel that you are in safe hands.",
        author: "T.B. Belfast, U.K.",
      },
      {
        rating: 3,
        title: "Berufserfahrung",
        content:
          "Ich kann Danielle nur wärmstens empfehlen. Seit über zwei Jahren habe ich nun schon mit ihr Online-Französischunterricht und bin immer noch so begeistert wie am ersten Tag, denn der Unterricht macht nicht nur Spaß und sondern man lernt auch sehr viel. Ich bin immer wieder erstaunt, wie viel ich bereits in den letzten zwei Jahren an Wortschatz und Grammatik gelernt habe. Danielle geht immer auf meine Wünsche ein und findet abwechslungsreiches und spannendes Unterrichtsmaterial, das mich interessiert. Die Flexiblität, die ein Online-Unterricht bietet, möchte ich nicht missen, da ich oft auf Geschäftsreisen bin. Wie gesagt, Online-Unterricht mit Danielle kann ich nur empfehlen.",
        author: "H.S. London",
      },
      {
        rating: 5,
        title: "My experience",
        content:
          "Danielle does an excellent job of listening to her students and tailoring a learning curriculum to focus on the individual’s needs. With a combination of grammatical exercises, common daily interactive conversations, and leveraging topical news clippings, the student very quickly becomes immersed in French. As a new beginner, it was remarkable to see my progress happen in such a short period of time, which was largely due to Danielle and the welcoming learning environment she creates. I had tried other learning tools, but only with Danielle was able to really improve my French and correct many bad habits learned through these tools. I would highly recommend her as an instructor for those new to the language or that would like to refine their existing skill set.",
        author: "M.S. - Columbus, Ohio, USA",
      },
      {
        rating: 5,
        title: "meine berufliche Erfahrung mit Danielle",
        content:
          "Frau Roettger versteht es, das Erlernen und die Anwendung der französischen Sprache angepasst an die Intereseen des Schülers zu vermitteln. Der richtige Mix aus Grammatik, Vokabeln, Sprach- und Verständnisübungen machen den Unterricht nie langweilig und auch nicht einseitig. Sie passt sich dem Tempo des Schülers an und führt gezielt durch Auswahl der richtigen Themen orientiert am Interesse des Schülers durch die Unterrichtsstunden. Ich konnte hierdurch nachhaltig und effizient meine Sprachkenntniss festigen, erweitern und in meinem Beruf umsetzen",
        author: "A.S. – Munich, Allemagne",
      },
    ],
  });
};

seed();
module.exports = seed;
