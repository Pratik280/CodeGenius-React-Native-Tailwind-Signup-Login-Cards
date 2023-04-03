/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/*.{js,jsx,ts,tsx}',
    './pages/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        textDark: '#3F3D56',
      },
    },
  },
  plugins: [],
};
