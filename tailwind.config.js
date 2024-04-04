/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      aleg: ["Alegreya","serif"],
      roboto: ["Roboto","sans-serif"],
      dance: "Dancing Script",
      right: ['Righteous','san-serif'],
      marg: ['Merriweather', 'sans-serif'] 
    }
  },
  plugins: [],
}

