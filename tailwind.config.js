/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      }
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          '@screen sm': { maxWidth: '100%' },
          '@screen md': { maxWidth: '100%' },
          '@screen lg': { maxWidth: '100%' },
          '@screen xl': { 
            maxWidth: 'calc(100% - 160px)', // 80px de chaque côté
          },
        },
      });
    },
  ],
};