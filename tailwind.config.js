/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "text-white",
    "border-blue-500",
    "border-green-500",
    "border-purple-500",
    "border-pink-500",
  ],
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
