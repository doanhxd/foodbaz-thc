module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
    },
    fontSize: {
      11: "11px",
      12: "12px",
      13: "13px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      24: "24px",
      36: "36px",
      40: "40px",
      44: "44px",
      48: "48px",
      56: "56px",
      64: "64px",
      72: "72px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
