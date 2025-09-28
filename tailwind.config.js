/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    // Adiciona a nova animação de "bounce"
    keyframes: {
      'touch-bounce': {
        '0%, 100%': { 
          transform: 'scale(1)', 
          opacity: 0.7 
        },
        '50%': { 
          transform: 'scale(1.15)', 
          opacity: 1 
        },
      },
    },
    animation: {
      // Renomeamos a animação para refletir o novo efeito
      'touch-bounce': 'touch-bounce 3s infinite ease-in-out',
    },
  },
},
  plugins: [],
}