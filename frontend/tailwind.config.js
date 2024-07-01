/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      margin: {
        xl: "13rem",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        black: {
          DEFAULT: "var(--black)",
        },
        white: {
          DEFAULT: "var(--white)",
        },
        primary: {
          DEFAULT: "var(--primary)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          light: "var(--light-secondary)",
          dark: "var(--dark-secondary)",
        },
        gray: {
          DEFAULT: "var(--gray)",
          light: "var(--light-gray)",
        },
        blue: {
          DEFAULT: "var(--blue)",
          light: "var(--light-blue)",
        },
      },
    },
  },
  plugins: [],
};
