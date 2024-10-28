import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        licorice: '#1F1300',
        orange: '#FF7F11',
        tomato: '#F2613F',
        snow: '#FBF5F3;'
      },
      container: {
        center: true, // Centers the container by adding auto margin
        screens: {
          sm: '500px',  // Custom width for small screens
          md: '720px',  // Custom width for medium screens
          lg: '950px',  // Custom width for large screens
          xl: '950px', // Custom width for extra-large screens
          '2xl': '1140px', // Custom width for 2XL screens
        },
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        prompt: ['Prompt', 'sans-serif'],
      },
    },
  },
  plugins: [flowbite.plugin()],
};
