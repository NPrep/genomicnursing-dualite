/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E3192', // Royal Blue
          light: '#4B4EB5',
          dark: '#1A1C60',
        },
        secondary: {
          DEFAULT: '#1F6FB2', // Secondary Blue
        },
        accent: {
          DEFAULT: '#FFD200', // Golden Yellow
          hover: '#E6BD00',
        },
        danger: '#E53935', // Medical Red
        surface: '#F5F9FF', // Light Blue Surface
        text: {
          primary: '#0B1C2D',
          secondary: '#475569',
        },
        border: '#D6E4F0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1280px', // Cap max width for academic look
        },
      },
    },
  },
  plugins: [],
}
