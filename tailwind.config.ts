import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const color = (name: string) => `rgba(var(--${name}), <alpha-value>)`;

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: color("background"),
        surface: color("surface"),
        "surface-hover": color("surface-hover"),
        foreground: color("foreground"),
        muted: color("muted"),
        accent: color("accent"),
        "accent-foreground": color("background"),
        price: color("price"),
        border: color("border"),
        success: color("success"),
        overlay: color("overlay"),
        "product-photo": color("product-photo"),
      },
      fontFamily: {
        sans: ["var(--font-be-vietnam-pro)", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        13: "3.25rem",
        22: "5.5rem",
      },
      opacity: { 15: "0.15", 35: "0.35", 65: "0.65", 85: "0.85" },
    },
  },
} satisfies Config;
