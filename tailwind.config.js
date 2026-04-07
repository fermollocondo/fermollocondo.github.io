/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. IMPORTANTE: Agregamos darkMode 'class' para que Tailwind 
  // escuche cuando cambias la clase en el body (como en tu reto anterior).
  darkMode: 'class', 
  
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 2. Aquí puedes añadir colores específicos del Figma para no usar genéricos
      colors: {
        brand: {
          primary: '#491eff', // Ejemplo: el color de tus botones previos
          dark: '#050617',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

