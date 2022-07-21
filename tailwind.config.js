module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        facebook: "#1877F2",
        twitter: "#1DA1F2",
        reddit: "#FF5700",
      },
      fontFamily: {
        // sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        display: ["Rubik", "ui-sans-serif", "sans-serif"],
      },
      height: {
        "cover-normal": "14rem",
        "cover-big": "28rem",
      },
    },
  },
};
