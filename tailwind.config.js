/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tis: {
          crimson: '#B90124',
          'crimson-dark': '#8B0000',
          'crimson-deep': '#5E0011',
          teal: '#007A83',
          'teal-dark': '#00545A',
          'teal-light': '#60BAB1',
          aqua: '#90CCD0',
          'aqua-soft': '#BEE2E4',
          'aqua-pale': '#EAF7F8',
          gold: '#C09D59',
          'gold-light': '#DFC48E',
          'gold-dark': '#9A7836',
          charcoal: '#131313',
          slate: '#1E232A',
          cream: '#FCFAF7',
          surface: '#F4EFE6'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      boxShadow: {
        'glow-crimson': '0 0 30px -5px rgba(185, 1, 36, 0.35)',
        'glow-teal': '0 0 30px -5px rgba(96, 186, 177, 0.4)',
        'glow-gold': '0 0 30px -5px rgba(192, 157, 89, 0.35)',
        'card-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.08), 0 0 1px 1px rgba(0, 0, 0, 0.04)',
        'card-dark': '0 20px 40px -15px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.08)',
      }
    },
  },
  plugins: [],
}
