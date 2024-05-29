/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./static/js/**/*.js"],
  theme: {
    fontFamily: {
      display: ['"SF Pro Display"', "sans-serif"],
      body: ['"SF Pro Text"', "sans-serif"],
    },
  },
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    "prettier-plugin-tailwindcss",
  ],
};
