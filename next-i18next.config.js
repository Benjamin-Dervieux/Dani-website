const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "de"],
    localePath: path.resolve("./public/locales"),
  },
};
