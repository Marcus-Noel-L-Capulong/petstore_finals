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
          main: '#6366f1', // Indigo 500
          light: '#818cf8',
          dark: '#4f46e5',
        },
        secondary: {
          main: '#f43f5e', // Rose 500
          light: '#fb7185',
          dark: '#e11d48',
        }
      }
    },
  },
  plugins: [],
}
