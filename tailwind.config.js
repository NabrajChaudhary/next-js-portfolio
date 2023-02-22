/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'handwriting':['"Caveat"','cursive']
      },
      colors: {
        primary: "#0A192F",
        secondary: "#F97316",
        tertiary: "#54D6BB",
      },
    },
    screens: {
      lg: { max: "2023px" },
      // => @media (min-width: 1024px) { ... }
      sm: { max: "1000px" },
      // => @media (min-width: 640px) { ... }
    },
  },
  plugins: [],
}
