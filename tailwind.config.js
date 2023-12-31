/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/components/Card.jsx",
    "./src/components/Filtered.jsx",
    "./src/components/Header.jsx",
    "./src/App.jsx",
    "./src/main.jsx",
    "./src/images",
    "./src/data/data.json"
  ],
  theme: {
    extend: {
      "images": "./src/images"
    },
  },
  plugins: [],
}

