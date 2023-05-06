/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
      'shamrock': {
        '50': '#ecfdf7',
        '100': '#d1faeb',
        '200': '#a7f3d7',
        '300': '#6ee7bb',
        '400': '#34d399',
        '500': '#10b97b',
        '600': '#059661',
        '700': '#04784e',
        '800': '#065f3f',
        '900': '#064e34',
        '950': '#022c1d',
      },
    },


    }
  },
  plugins: []
};
