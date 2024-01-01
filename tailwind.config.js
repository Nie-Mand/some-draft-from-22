/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        so: {
          dark: "#141514",
        },
        purple: {
          lot: "#B105C0",
          mid: "#F044FF",
        },
      },
    },
  },
  plugins: [],
};
