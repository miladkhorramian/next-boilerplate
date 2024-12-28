import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foregrond: "hsl(var(--white))",
        },
        "primary-dark": {
          DEFAULT: "hsl(var(--primary-dark))",
          foreground: "hsl(var(--white))",
        },
        "primary-900": {
          DEFAULT: "hsl(var(--primary-900))",
          foreground: "hsl(var(--white))",
        },
        "primary-800": {
          DEFAULT: "hsl(var(--primary-800))",
          foreground: "hsl(var(--white))",
        },
        "primary-700": {
          DEFAULT: "hsl(var(--primary-700))",
          foreground: "hsl(var(--white))",
        },
        "primary-600": {
          DEFAULT: "hsl(var(--primary-600))",
          foreground: "hsl(var(--white))",
        },
        "primary-500": {
          DEFAULT: "hsl(var(--primary-500))",
          foreground: "hsl(var(--white))",
        },
        "primary-400": {
          DEFAULT: "hsl(var(--primary-400))",
          foreground: "hsl(var(--white))",
        },
        "primary-300": {
          DEFAULT: "hsl(var(--primary-300))",
          foreground: "black",
        },
        "primary-200": {
          DEFAULT: "hsl(var(--primary-200))",
          foreground: "black",
        },
        "primary-100": {
          DEFAULT: "hsl(var(--primary-100))",
          foreground: "black",
        },
        "primary-50": {
          DEFAULT: "hsl(var(--primary-50))",
          foreground: "black",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--white))",
        },
        "secondary-dark": {
          DEFAULT: "hsl(var(--secondary-dark))",
          foreground: "hsl(var(--white))",
        },
        "secondary-900": {
          DEFAULT: "hsl(var(--secondary-900))",
          foreground: "hsl(var(--white))",
        },
        "secondary-800": {
          DEFAULT: "hsl(var(--secondary-800))",
          foreground: "hsl(var(--white))",
        },
        "secondary-700": {
          DEFAULT: "hsl(var(--secondary-700))",
          foreground: "hsl(var(--white))",
        },
        "secondary-600": {
          DEFAULT: "hsl(var(--secondary-600))",
          foreground: "hsl(var(--white))",
        },
        "secondary-500": {
          DEFAULT: "hsl(var(--secondary-500))",
          foreground: "hsl(var(--white))",
        },
        "secondary-400": {
          DEFAULT: "hsl(var(--secondary-400))",
          foreground: "hsl(var(--white))",
        },
        "secondary-300": {
          DEFAULT: "hsl(var(--secondary-300))",
          foreground: "black",
        },
        "secondary-200": {
          DEFAULT: "hsl(var(--secondary-200))",
          foreground: "black",
        },
        "secondary-100": {
          DEFAULT: "hsl(var(--secondary-100))",
          foreground: "black",
        },
        "secondary-50": {
          DEFAULT: "hsl(var(--secondary-50))",
          foreground: "black",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--white))",
        },
        "info-dark": {
          DEFAULT: "hsl(var(--info-dark))",
          foreground: "hsl(var(--white))",
        },
        "info-900": {
          DEFAULT: "hsl(var(--info-900))",
          foreground: "hsl(var(--white))",
        },
        "info-800": {
          DEFAULT: "hsl(var(--info-800))",
          foreground: "hsl(var(--white))",
        },
        "info-700": {
          DEFAULT: "hsl(var(--info-700))",
          foreground: "hsl(var(--white))",
        },
        "info-600": {
          DEFAULT: "hsl(var(--info-600))",
          foreground: "hsl(var(--white))",
        },
        "info-500": {
          DEFAULT: "hsl(var(--info-500))",
          foreground: "hsl(var(--white))",
        },
        "info-400": {
          DEFAULT: "hsl(var(--info-400))",
          foreground: "hsl(var(--white))",
        },
        "info-300": {
          DEFAULT: "hsl(var(--info-300))",
          foreground: "black",
        },
        "info-200": {
          DEFAULT: "hsl(var(--info-200))",
          foreground: "black",
        },
        "info-100": {
          DEFAULT: "hsl(var(--info-100))",
          foreground: "black",
        },
        "info-50": {
          DEFAULT: "hsl(var(--info-50))",
          foreground: "black",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--white))",
        },
        "success-dark": {
          DEFAULT: "hsl(var(--success-dark))",
          foreground: "hsl(var(--white))",
        },
        "success-900": {
          DEFAULT: "hsl(var(--success-900))",
          foreground: "hsl(var(--white))",
        },
        "success-800": {
          DEFAULT: "hsl(var(--success-800))",
          foreground: "hsl(var(--white))",
        },
        "success-700": {
          DEFAULT: "hsl(var(--success-700))",
          foreground: "hsl(var(--white))",
        },
        "success-600": {
          DEFAULT: "hsl(var(--success-600))",
          foreground: "hsl(var(--white))",
        },
        "success-500": {
          DEFAULT: "hsl(var(--success-500))",
          foreground: "hsl(var(--white))",
        },
        "success-400": {
          DEFAULT: "hsl(var(--success-400))",
          foreground: "hsl(var(--white))",
        },
        "success-300": {
          DEFAULT: "hsl(var(--success-300))",
          foreground: "black",
        },
        "success-200": {
          DEFAULT: "hsl(var(--success-200))",
          foreground: "black",
        },
        "success-100": {
          DEFAULT: "hsl(var(--success-100))",
          foreground: "black",
        },
        "success-50": {
          DEFAULT: "hsl(var(--success-50))",
          foreground: "black",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
          foreground: "hsl(var(--white))",
        },
        "error-dark": {
          DEFAULT: "hsl(var(--error-dark))",
          foreground: "hsl(var(--white))",
        },
        "error-900": {
          DEFAULT: "hsl(var(--error-900))",
          foreground: "hsl(var(--white))",
        },
        "error-800": {
          DEFAULT: "hsl(var(--error-800))",
          foreground: "hsl(var(--white))",
        },
        "error-700": {
          DEFAULT: "hsl(var(--error-700))",
          foreground: "hsl(var(--white))",
        },
        "error-600": {
          DEFAULT: "hsl(var(--error-600))",
          foreground: "hsl(var(--white))",
        },
        "error-500": {
          DEFAULT: "hsl(var(--error-500))",
          foreground: "hsl(var(--white))",
        },
        "error-400": {
          DEFAULT: "hsl(var(--error-400))",
          foreground: "hsl(var(--white))",
        },
        "error-300": {
          DEFAULT: "hsl(var(--error-300))",
          foreground: "black",
        },
        "error-200": {
          DEFAULT: "hsl(var(--error-200))",
          foreground: "black",
        },
        "error-100": {
          DEFAULT: "hsl(var(--error-100))",
          foreground: "black",
        },
        "error-50": {
          DEFAULT: "hsl(var(--error-50))",
          foreground: "black",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        warning: "hsl(var(--warning))",
        "warning-foreground": "hsl(var(--warning-foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        "heading-1": "96px",
        "heading-2": "60px",
        "heading-3": "48px",
        "heading-4": "34px",
        "heading-5": "24px",
        "heading-6": "20px",
        "subtitle-1": "16px",
        "subtitle-2": "14px",
        "body-1": "16px",
        "body-2": "14px",
        caption: "12px",
        overline: "10px",
        button: "14px",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
