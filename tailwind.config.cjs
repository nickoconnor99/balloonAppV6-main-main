/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['winter', 'dracula'],
  },
};

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     './components/**/*.{js,ts,jsx,tsx}'
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require("@tailwindcss/typography"), require("daisyui")],
//   daisyui: {
//     styled: true,
//     themes: true,
//     base: true,
//     utils: true,
//     logs: true,
//     rtl: false
//   }
// }

// import tailwindcssTypography from '@tailwindcss/typography';
// import daisyui from 'daisyui';

// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     './components/**/*.{js,ts,jsx,tsx}'
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [tailwindcssTypography, daisyui],
// };