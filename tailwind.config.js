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
        "p-md": "18px",
        "p-sm": "14px",
        "p-xs": "12px",
        "nav": "20px",
        "quote": "32px",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, addBase, theme }) {
      addBase({
        h1: {
          fontSize: theme("fontSize.head-1"),
          lineHeight: 1.25,
          fontWeight: "700",
          fontFamily: theme("fontFamily.cabin"),
          lineHeight: "1.25em",
          "@media screen and (max-width: 640px)": {
            fontSize: "40px",
          }
        },
        h2: {
          fontSize: theme("fontSize.head-2"),
          lineHeight: 1.25,
          fontWeight: "700",
          fontFamily: theme("fontFamily.cabin"),
          "@media screen and (max-width: 640px)": {
            fontSize: "35px",
          }
        },
        h3: {
          fontSize: theme("fontSize.head-3"),
          lineHeight: 1.25,
          fontWeight: "400",
          fontFamily: theme("fontFamily.cabin"),
          "@media screen and (max-width: 640px)": {
            fontSize: "30px",
          }
        },
        h4: {
          fontSize: theme("fontSize.head-4"),
          lineHeight: 1.25,
          fontWeight: "600",
          fontFamily: theme("fontFamily.cabin"),
          "@media screen and (max-width: 640px)": {
            fontSize: "25px",
          }
        },
        h5: {
          fontSize: theme("fontSize.head-5"),
          lineHeight: 1.25,
          fontWeight: "600",
          fontFamily: theme("fontFamily.cabin"),
          "@media screen and (max-width: 640px)": {
            fontSize: "20px",
          }
        },
        h6: {
          fontSize: theme("fontSize.head-6"),
          lineHeight: 1.25,
          fontWeight: "600",
          fontFamily: theme("fontFamily.cabin"),
          "@media screen and (max-width: 640px)": {
            fontSize: "15px",
          }
        },
        p: {
          fontSize: theme("fontSize.p-normal"),
          fontWeight: "400",
          fontFamily: theme("fontFamily.lato"),
          color: theme("colors.sec-paragraph"),
          letterSpacing: ".75px",
          lineheight: "24px",
          "@media screen and (max-width: 640px)": {
            fontSize: theme("fontSize.p-sm"),
          }
        },
      });
      addComponents({
        ".btn-iconic": {
          padding: "8px 24px 8px 8px",
        },
        ".btn-base-pad": {
          padding: "16px 32px",
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
          fontFamily: theme("fontFamily.lato"),
          fontSize: theme("fontSize.p-md"),
          fontWeight: "500",
          borderRadius: "42px",
          letterSpacing: ".75px",
          transition: "all .1s ease-in",
          "@media screen and (max-width: 640px)": {
            fontSize: theme("fontSize.p-xs"),
          }
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
