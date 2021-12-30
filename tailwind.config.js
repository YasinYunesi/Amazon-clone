module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        amazon_blue: {
          DEFAULT: "#232F3E",
          dark: "#131921",
          light: "#37475A",
        },
        amazon_yellow: {
          DEFAULT: "#febd69",
          dark: "#f0a542",
        },
      },
      borderWidth: {
        40: "40px",
      },
      keyframes: {
        slide_in: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slide_out: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fade_in: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        rotateA: {
          "0%,25%": { transform: "rotate(0)" },
          "50%,75%": { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        rotateB: {
          "0%,25%": { transform: "rotate(90deg)" },
          "50%,75%": { transform: "rotate(270deg)" },
          "100%": { transform: "rotate(450deg)" },
        },
      },
      animation: {
        slide_in: "slide_in 0.3s ease-in forwards",
        slide_out: "slide_out 0.3s ease-in forwards",
        fade_in: "fade_in 0.2s linear forwards",
        rotateA: "rotateA 2s linear infinite 0.5s",
        rotateB: "rotateB 2s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
