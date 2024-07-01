import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      gridTemplateColumns: {
        thinCenter: "3fr, 0.5fr, 3fr",
        wideCenter: "1fr, 3fr, 1fr",
      },
      colors: {
        theme: {
          500: "#23395d",
          600: "#203354",
          700: "#1c2e4a",
          800: "#192841",
          900: "#152238",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
