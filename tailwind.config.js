const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Acme: ["Acme", "sans-serif"],
        Righteous: ["Righteous", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
