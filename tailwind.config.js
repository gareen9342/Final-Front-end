// const plugin = require("tailwindcss")
const colors = require("tailwindcss/colors");
module.exports = {
  // purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#32681d",
      secondary: "#6d4c41",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      green: colors.emerald,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      rose: colors.rose,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      emerald: colors.emerald,
    },
    fontFamily: { body: "Open Sans" },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require("@tailwindcss/forms"),
    // require("@tailwindcss/typography"),
    // require("@tailwindcss/aspect-ratio"),
  ],
};
