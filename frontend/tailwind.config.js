/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#171717',
        bone: '#F4EFE7',
        taupe: '#A89B8D',
        terracotta: '#9A552C',
        sand: '#DDD2C5',
        white: '#FFFFFF',
      },
      fontFamily: {
        display: ['"Bodoni Moda"', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
      spacing: {
        'mobile': '20px',
        'tablet': '32px',
        'desktop': '48px',
        'desktop-lg': '72px',
      },
      maxWidth: {
        'content': '1440px',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
