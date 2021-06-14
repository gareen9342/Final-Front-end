// const plugin = require("tailwindcss")
module.exports = {
  // purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#32681d",
      secondary: "#6d4c41",
      gray: {
        50: "#f9fafb",
        100: "#f4f5f7",
        200: "#e5e7eb",
        300: "#d2d6dc",
        400: "#9fa6b2",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#252f3f",
        900: "#161e2e",
      },
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
