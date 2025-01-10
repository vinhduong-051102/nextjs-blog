/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        heightPulse: "heightPulse 8s ease-in-out infinite",
        heightPulseRevert: "heightPulseRevert 8s ease-in-out infinite",
        sizeTransform: "sizeTransform 12s ease-in-out infinite",
        widthTransform: "widthTransform 8s ease-in-out infinite",
      },
      keyframes: {
        widthTransform: {
          "0%": {
            width: "auto",
          },
          "35%": {
            width: "10px",
          },
          "45%": {
            width: "9px",
          },
          "55%": {
            width: "8px",
          },
          "80%": {
            width: "auto",
          },
          "100%": {
            width: "auto",
          },
        },
        sizeTransform: {
          "0%": {
            width: "32px",
            height: "32px",
            borderRadius: "2px",
          },
          "25%": {
            width: "32px",
            height: "32px",
            borderRadius: "2px",
          },
          "35%": {
            width: "16px",
            height: "16px",
            borderRadius: "16px",
          },
          "39%": {
            width: "16px",
            height: "16px",
            borderRadius: "16px",
          },
          "45%": {
            width: "32px",
            height: "32px",
            borderRadius: "2px",
          },
          "100%": {
            width: "32px",
            height: "32px",
            borderRadius: "2px",
          },
        },
        heightPulse: {
          "0%": { height: "32px" },
          "25%": { height: "48px" },
          "50%": { height: "48px" },
          "75%": { height: "32px" },
          "100%": { height: "32px" },
        },
        heightPulseRevert: {
          "0%": { height: "48px" },
          "25%": { height: "32px" },
          "50%": { height: "32px" },
          "75%": { height: "48px" },
          "100%": { height: "48px" },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
