/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#F2E9D8',
          muted: '#E3D2BA',
          primary: '#708A47',
          secondary: '#B68A60',
          text: '#2E2B27',
          dark: '#171513',
        },
      },
      boxShadow: {
        soft: '0 10px 35px rgba(0,0,0,0.08)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Montserrat"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
