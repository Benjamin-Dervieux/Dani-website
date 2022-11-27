import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { LanguageDetector } from "i18next-browser-languagedetector";

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      fr: {
        translation: {},
      },
    },
  });

export default i18next;
