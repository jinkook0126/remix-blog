/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 눈이 편안한 색상 팔레트
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        secondary: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        },
        accent: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
        },
        // 강조 색상
        highlight: {
          blue: "#3b82f6",
          green: "#10b981",
          purple: "#8b5cf6",
          orange: "#f59e0b",
          pink: "#ec4899",
        },
      },
      fontFamily: {
        sans: ["NanumSquareNeo", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#334155",
            a: {
              color: "#0ea5e9",
              textDecoration: "none",
              "&:hover": {
                color: "#0284c7",
                textDecoration: "underline",
              },
            },
            "h1, h2, h3, h4, h5, h6": {
              color: "#0f172a",
            },
            code: {
              color: "#8b5cf6",
              backgroundColor: "#f1f5f9",
              padding: "0.25rem 0.375rem",
              borderRadius: "0.25rem",
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
