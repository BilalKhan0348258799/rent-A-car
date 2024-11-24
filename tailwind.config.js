/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Add this for app directory support
    './src/pages/**/*.{js,ts,jsx,tsx}', // If using pages
    './src/components/**/*.{js,ts,jsx,tsx}', // If you have components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

