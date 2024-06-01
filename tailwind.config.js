/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./static/js/**/*.js"],
  theme: {
    fontFamily: {
      display: ['"SF Pro Display"', "sans-serif"],
      body: ['"SF Pro Text"', "sans-serif"],
    },
    colors: {
      primary: "#1D1D1F",
      body: "#424245",
      activeblue: "#2997FF",
      lowcontrast: "#6E6E73",
      bglightgray: "#F5F5F7",
      bgdarkgray: "#323233",
    },
  },
  plugins: [],
};
