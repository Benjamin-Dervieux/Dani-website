/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dani-green": "#2D4C49",
        "dani-selected": "#E6C690",
      },
    },
  },
  plugins: [],
};
