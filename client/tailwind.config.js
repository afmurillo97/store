/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors:{
        'red' : '#ff2929',
        'red-hover' : '#ff6666'
      },
      screens: { // Tailwind is Mobile First!!
        'tablet-mini': '640px',
        // => @media (min-width: 640px) { ... }
        'tablet': '768px',
        // => @media (min-width: 768px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}
