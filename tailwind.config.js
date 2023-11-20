/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f6faf3",
          100: "#e9f5e3",
          200: "#d3eac8",
          300: "#b0d79e",
          400: "#77b55a",
          500: "#63a047",
          600: "#4f8336",
          700: "#3f682d",
          800: "#355328",
          900: "#2c4522",
          950: "#14250e",
        },
        accent: {
          50: "#fbf8fb",
          100: "#f6f0f7",
          200: "#ede0ee",
          300: "#dfc7e0",
          400: "#cca6cc",
          500: "#b481b4",
          600: "#966394",
          700: "#7b5079",
          800: "#6e486c",
          900: "#553a53",
          950: "#341e32",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
