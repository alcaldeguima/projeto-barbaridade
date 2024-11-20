import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'fade-in': 'fadeIn 2s ease-in-out',
        'fade-out': 'fadeOut 1.5s ease-in-out',
        
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0.7' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '0.7' },
          '100%': { opacity: '1' },
        },
    }
  },
  },
  variants: {
    extend: {
      animation: ['hover']
    }
  }
};
export default config;
