module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        teal: { 600: "#00917c", A700: "#04d5b7", "600_99": "#00917c99" },
        black: { 900: "#000000", "900_7f": "#0404047f", "900_0c": "#0000000c" },
        gray: {
          50: "#f8f9fa",
          900: "#131010",
          "900_02": "#131111",
          "900_01": "#1f2020",
        },
        blue_gray: {
          100: "#d9d9d9",
          900: "#1c3434",
          "100_66": "#d9d9d966",
          "100_01": "#d9d6d6",
        },
        white: { A700: "#ffffff" },
      },
      fontFamily: { worksans: "Work Sans", roboto: "Roboto", inter: "Inter" },
      boxShadow: { bs: "0px 10px  20px 0px #0000000c" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
