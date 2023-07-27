/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Work Sans"],
      serif: ["Merriweather"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
