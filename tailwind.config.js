const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        // sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        display: ["Rubik", "ui-sans-serif", "sans-serif"],
      },
      height: {
        "cover-normal": "14rem",
        "cover-big": "28rem",
      },
      colors: {
        orange: colors.orange,
      },
    },
  },
  variants: {
    extend: {
      translate: ["group-hover"],
    },
  },
  plugins: [],
};
