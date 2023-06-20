/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  important: true,
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
        dev: "url('../src/source/images/developer-bro.svg')",
        about: "url('../src/source/images/happy.jpg')",
      },
      flex: {
        c: "0 1 80%",
        m: "0 1 48%",
        l: "0 1 30%",
        6: "1 1 60%",
        5: "1 1 50%",
        4: "1 1 40%",
      },
      animation: {
        "skeleton-text": "skeleton-text 1s linear infinite",
        "skeleton-image": "skeleton-image 1s linear infinite",
      },
      keyframes: {
        "skeleton-text": {
          "0%": { backgroundColor: "hsl(200, 20%, 80%)" },
          "100%": { backgroundColor: "hsl(200, 20%, 95%)" },
        },
        "skeleton-image": {
          "0%": { backgroundColor: "#e5e7eb" },
          "100%": { backgroundColor: "#f9fafb" },
        },
      },
    },
  },
  plugins: [],
};
