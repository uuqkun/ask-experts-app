const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        cabin: ["Cabin", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        "pri-yellow": "#FFCC4A",
        "pri-green": "#4EAF4E",
        "pri-dark-gray": "#181818",
        "pri-heading": "#1C1C1C",
        "sec-paragraph": "#595566",
        "sec-light-gray": "#F5F5F5",
        "sec-white": "#FFFFFF",
        "sec-input": "#A9A9A9",
      },
      fontSize: {
        "head-1": "50px",
        "head-2": "45px",
        "head-3": "40px",
        "head-4": "35px",
        "head-5": "30px",
        "head-6": "25px",
        "p-normal": "16px",
        "p-sm": "14px",
        "quote": "32px",
        "btn": "12px",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.head-1"),
          fontWeight: "700",
          fontFamily: theme("fontFamily.cabin"),
          lineHeight: "1.25em",
        },
        h2: {
          fontSize: theme("fontSize.head-2"),
          fontWeight: "700",
          fontFamily: theme("fontFamily.cabin"),
        },
        h3: {
          fontSize: theme("fontSize.head-3"),
          fontWeight: "400",
          fontFamily: theme("fontFamily.cabin"),
        },
        h4: {
          fontSize: theme("fontSize.head-4"),
          fontWeight: "600",
          fontFamily: theme("fontFamily.cabin"),
        },
        h5: {
          fontSize: theme("fontSize.head-5"),
          fontWeight: "600",
          fontFamily: theme("fontFamily.cabin"),
        },
        h6: {
          fontSize: theme("fontSize.head-6"),
          fontWeight: "600",
          fontFamily: theme("fontFamily.cabin"),
        },
        p: {
          fontSize: theme("fontSize.p-normal"),
          fontWeight: "400",
          fontFamily: theme("fontFamily.lato"),
          color: theme("colors.sec-paragraph"),
          letterSpacing: ".75px",
          lineheight: "24px",
        },
      });
      addComponents({
        ".btn-iconic": {
          padding: "8px",
        },
        ".btn-base-pad": {
          padding: "8px 32px",
        },
        ".bg-card-transparent": {
          backgroundColor: "rgba(255, 255, 255, 0.85)",
        },
        ".icon-standart": {
          width: "16px",
          height: "16px",
        },
        ".icon-lg": {
          width: "44px",
          height: "44px",
        },
        ".btn-base": {
          borderWidth: "1.5px",
          height: "61px",
          fontFamily: theme("fontFamily.lato"),
          fontSize: theme("fontSize.btn"),
          fontWeight: "500",
          borderRadius: "42px",
          letterSpacing: ".75px",
          transition: "all .1s ease-in",
        },
        ".btn-dark": {
          backgroundColor: theme("colors.pri-dark-gray"),
          color: theme("colors.sec-light-gray"),
          borderColor: theme("colors.pri-dark-gray"),
          "&:hover": {
            backgroundColor: theme("colors.sec-light-gray"),
            color: theme("colors.pri-dark-gray"),
          },
        },
        ".btn-yellow": {
          backgroundColor: theme("colors.pri-yellow"),
          borderColor: theme("colors.pri-yellow"),
          color: theme("colors.sec-dark-gray"),
          "&:hover": {
            backgroundColor: theme("colors.pri-dark-gray"),
            color: theme("colors.sec-light-gray"),
            borderColor: theme("colors.pri-dark-gray"),
          },
        },
        ".btn-white": {
          backgroundColor: theme("colors.sec-white"),
          borderColor: theme("colors.sec-white"),
          color: theme("colors.sec-dark-gray"),
          "&:hover": {
            backgroundColor: theme("colors.pri-dark-gray"),
            color: theme("colors.sec-light-gray"),
            borderColor: theme("colors.pri-dark-gray"),
          },
        },
      });
    }),
  ],
};
