const mainDir = __dirname + "/../../";

module.exports = {
  map: false,
  plugins: [
    require("tailwindcss")(mainDir + "assets/css/tailwind.config.js"),
    require("autoprefixer")({
      path: [mainDir],
    }),
  ],
};