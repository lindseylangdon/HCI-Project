/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "mustard-yellow": "#facc15",
        "soft-black": "#232B2B",
        "dark-mustard": "#BFA443",
      }
    },
  },
  plugins: [],
}

