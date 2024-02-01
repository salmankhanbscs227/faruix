/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        nunito:['nunito','sans-serif'],
        assistant:['Assistant','sans-serif'],
      },
      screens:{
        
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 1024px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1280px) { ... }
        'xl': '1280px',
        '2xl':'1536px',
      },
    },
    
  },
  plugins: [],
}

