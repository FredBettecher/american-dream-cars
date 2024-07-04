/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        xenogears: ['Xenogears Regular', 'sans-serif'],
        raceline: ['Raceline Demo', 'sans-serif'],
      },
      colors: {
        'brand-dark-red': '#7B170F',
        'brand-red': '#CD3837',
        'brand-dark-blue': '#046076',
        'brand-light-blue': '#059CC6',
      },
      keyframes: {
        fadeInOut: {
          '0%, 100%': { opacity: '0', scale: '1', transformOrigin: 'center center' },
          '50%': { opacity: '1', scale: '1.1', transformOrigin: 'center center' },
        },
        textColorChange: {
          '0%, 100%': { color: '#7B170F' },
          '50%': { color: '#CD3837' },
        },
      },
      animation: {
        'fade-in-out': 'fadeInOut 10s ease-in-out infinite',
        'text-color-change': 'textColorChange 10s ease-in-out infinite'
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('@tailwindcss/forms'),
  ],
}
