/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill-minmax': 'repeat(auto-fill, minmax(350px, 1fr))',
      },
      colors: {
        "baseHeader": "var(--bg-color-header)",
        "baseText": "var(--text-color)",
        "baseTextHeader": "var(--text-color-header)",
        "baseButton": "var(--accent-color)",
        "baseLink": "var(--link-color)"
      },
    },
  },
  plugins: [],
}

