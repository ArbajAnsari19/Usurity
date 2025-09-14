/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#AD724E',
        'teal': {
          400: '#14B8A6',
          500: '#0D9488',
          600: '#0F766E'
        },
        'coral': {
          400: '#F97316',
          500: '#EA580C',
          600: '#DC2626'
        },
        'indigo': {
          400: '#6366F1',
          500: '#4F46E5',
          600: '#4338CA'
        },
        'lavender': {
          400: '#C4B5FD',
          500: '#A78BFA',
          600: '#8B5CF6'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'black': '900',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'sweep': 'sweep 15s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};