import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
 // Correct import for ESM

const config: Config = {
  darkMode: "class", // Enables dark mode using class-based strategy
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [tailwindcssAnimate], // Use the imported module
};

export default config;
