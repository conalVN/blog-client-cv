/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Alkatra", "cursive"],
        banner: ["Macondo Swash Caps", "cursive"],
        text: ["Pacifico", "cursive"],
        form: ["Source Code Pro", "monospace"],
      },
      height: {
        400: "400px",
      },
      backgroundColor: {
        alpha: "rgba(255, 255, 255, .8)",
        "alpha-1": "rgba(0, 0, 0, .4)",
      },
      backgroundImage: {
        topLeft: "url('../src/source/images/leftTop.svg')",
        botLeft: "url('../src/source/images/leftBot.svg')",
        topRight: "url('../src/source/images/rightTop.svg')",
        botRight: "url('../src/source/images/rightBot.svg')",
        about: "url('../src/source/images/happy.jpg')",
      },
    },
  },
  plugins: [],
};
