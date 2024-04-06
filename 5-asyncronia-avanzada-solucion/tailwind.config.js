// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/*.{html,js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "540px",
      },
    },
  },
  safelist: [
    {
      pattern: /col-span-.+/,
      variants: ["sm", "md", "lg", "xl"],
    },
  ],
  darkMode: "class",
  plugins: [nextui()],
};
