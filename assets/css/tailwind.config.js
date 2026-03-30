const defaultTheme = require("tailwindcss/defaultTheme");

const mainDir = __dirname + "/../../";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    `${mainDir}/layouts/**/*.html`,
    `${mainDir}/content/**/*.md`,
    `${mainDir}/content/**/*.html`,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};