/* eslint-disable no-undef */

const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'chainPrimary':'#440080',
        'chainSecondary':'#C183CC',
        'white50': '#1E1E1E80',
        'primaryButton':'#440080',

      }
    },
  },
  plugins: [
    flowbite.plugin(),

  ],
}

