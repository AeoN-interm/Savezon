/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class', // ✅ Enables class-based dark mode
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        },
        colors: {
          primary: '#00FFFF',
          accent: '#FF00FF',
          dark: '#0a0a0a',
        },
      },
    },
    plugins: [],
  };
  