/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this based on your project structure
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")], // Add DaisyUI plugin
  daisyui: {
    themes: [
      {
        dndtheme: {
          primary: "#7f1d1d",
          secondary: "#1e293b",
          accent: "#f59e0b",
          neutral: "#111827",
          "base-100": "#1f2937",
          info: "#3b82f6",
          success: "#10b981",
          warning: "#fbbf24",
          error: "#ef4444",
        },
      },
    ],
  },
};