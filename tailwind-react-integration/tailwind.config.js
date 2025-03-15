/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"], // Replaces `purge`
    darkMode: "media", // or 'class' if you want to toggle dark mode manually
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [],
  };