/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          500: '#2563eb',
          600: '#1d4ed8',
          700: '#1e40af'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgb(37 99 235 / 0.2), 0 15px 35px -15px rgb(37 99 235 / 0.55)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        appear: {
          from: { opacity: '0', transform: 'translateY(18px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        appear: 'appear 650ms ease forwards'
      }
    },
  },
  plugins: [],
}
