/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FF4B3E",      // 🍅 Tomato Red
        secondary: "#FFA41B",    // 🧡 Warm Orange
        accent: "#4CAF50",       // 🥬 Fresh Green
        white: {
          DEFAULT: "#ffffff",
          100: "#F9F9F9",
        },
        gray: {
          100: "#9E9E9E",
          200: "#757575",
        },
        dark: {
          100: "#1E1E1E",
        },
        error: "#F14141",
        success: "#2F9B65",
      },
      fontFamily: {
        heading: ["Poppins-Bold", "sans-serif"],
        subheading: ["Poppins-SemiBold", "sans-serif"],
        body: ["Inter-Regular", "sans-serif"],
        "body-semibold": ["Inter-SemiBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
