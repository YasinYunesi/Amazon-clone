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
      },
      animation: {
        slide_in: "slide_in 0.3s ease-in forwards",
        slide_out: "slide_out 0.3s ease-in forwards",
        fade_in: "fade_in 0.2s linear forwards",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
