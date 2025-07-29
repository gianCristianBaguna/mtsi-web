/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      skew: {
        3: "3deg",
        "-3": "-3deg",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".diagonal-bar": {
          "clip-path": "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
        },
      });
    },
  ],
};
