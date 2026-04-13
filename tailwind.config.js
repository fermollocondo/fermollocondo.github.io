/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Configuramos tus colores reales de marca
        brand: {
          orange: '#FF4500', // Tu Signature Orange
          black: '#050505',  // Un negro más profundo y elegante
        },
        // Usamos la paleta Zinc (gris neutro) como base
        zinc: {
          950: '#09090b',
        }
      },
      letterSpacing: {
        'tightest': '-.075em',
        'widest': '.25em', // Para ese look de títulos pequeños y separados
      },
    },
  },
  plugins: [],
}

