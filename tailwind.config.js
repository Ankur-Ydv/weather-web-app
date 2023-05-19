/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightMode: {
          background: "#c0cffa",
          txt: "#2D2D2D",
          component: "#f3f4fe",
        },
        darkMode: {
          background: "#334173",
          txt: "#c0cffa",
          component: "#212c58",
        },
      },
    },
  },
  plugins: [],
};
