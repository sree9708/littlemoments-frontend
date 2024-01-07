import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ["Poppins", "sans-serif"],
        title: ['"Passion One"', "sans-serif"],
      },
      colors: {
        background: "#FDF7E4",
        primary: "#000000",
        secondary: "#FFFFFF",
        "theme-color-1": "#FF6A4C",
        "theme-color-2": "#f0eacd",
        "theme-color-3": "#0274ff",
        "theme-color-4": "#ffc801",
      },
      screens: {
        sm: "640px", // Small screens, like mobile
        md: "768px", // Medium screens, like tablets
        lg: "1024px", // Large screens, like laptops
        xl: "1280px", // Extra large screens, like desktops
        "2xl": "1646px", // Extra large screens, like desktops
      },
      fontSize: {
        sm: ["0.8rem", { lineHeight: "1.2" }],
        base: ["1rem", { lineHeight: "1.5" }],
        xl: ["1.25rem", { lineHeight: "1" }],
        "2xl": ["1.563rem", { lineHeight: "1" }],
        "3xl": ["1.953rem", { lineHeight: "1" }],
        "4xl": ["2.441rem", { lineHeight: "1" }],
        "5xl": ["3.052rem", { lineHeight: "1" }],
        "title-footer": ["10em", { lineHeight: "1" }],
        "title-lg": ["8rem", { lineHeight: "1" }],
        "title-md": ["6rem", { lineHeight: "1" }],
        "title-sm": ["4rem", { lineHeight: "1" }],
      },
      fontWeight: {
        hairline: "100",
        thin: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
    },
  },
  plugins: [],
}
export default config
