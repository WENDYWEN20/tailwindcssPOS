/** @type {import('tailwindcss').Config} */
export default {
  content: 
  // ["./**/*.{html,js, jsx}"],
  ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
