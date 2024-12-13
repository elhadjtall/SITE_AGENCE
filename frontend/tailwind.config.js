const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Chemins des fichiers à scanner
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans], // Remplacez "Inter" par la police souhaitée
      },
    },
  },
  plugins: [],
};
