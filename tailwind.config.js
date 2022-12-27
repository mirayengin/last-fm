/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('https://cdn.pixabay.com/photo/2021/10/27/13/15/cat-6747298_960_720.jpg')"
      }
    },
  },
  darkMode: "class",
  plugins: [],
};
