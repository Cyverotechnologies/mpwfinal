/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // Define your custom breakpoints here
        xs: "480px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
