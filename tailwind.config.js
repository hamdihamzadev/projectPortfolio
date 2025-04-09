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
          '@media (max-width: 639px)': {
            width: 'calc(100% - 32px)',
          },
          '@screen sm': { maxWidth: '608px' },
          '@screen md': { maxWidth: '688px' },
          '@screen lg': { maxWidth: '944px' },
          '@screen xl': { maxWidth: '1120px'},
          '@screen xl': { maxWidth: '1376px'},
        },
      });
    },
  ],
};