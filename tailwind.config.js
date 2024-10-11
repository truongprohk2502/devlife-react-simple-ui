/** @type {import('tailwindcss').Config} */
export default {
  content: ["./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "zoom-in": {
          from: { transform: "scale(0.85)" },
          to: { transform: "scale(1)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "opacity-up": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "opacity-down": {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        "scale-up": {
          from: { transform: "scale(0.9)", opacity: 0 },
          to: { transform: "scale(1)", opacity: 1 },
        },
        "scale-down": {
          from: { transform: "scale(1)", opacity: 1 },
          to: { transform: "scale(0.9)", opacity: 0 },
        },
        "shift-right-in": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0%)" },
        },
        "shift-right-out": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(100%)" },
        },
        "shift-left-in": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0%)" },
        },
        "shift-left-out": {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-100%)" },
        },
        "toast-in": {
          from: { opacity: 0, transform: "scale(0.9)" },
          to: { opacity: 1, transform: "scale(1)" },
        },
        "toast-out": {
          from: { opacity: 1, transform: "scale(1)" },
          to: { opacity: 0, transform: "scale(0.9)" },
        },
        "progress-bar-stripes": {
          from: { backgroundPosition: "1rem 0" },
          to: { backgroundPosition: "0 0" },
        },
        skeleton: {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(100%)" },
        },
        pulse: {
          "0%": {
            transform: "scale(0)",
            opacity: 0.5,
          },
          "50%": {
            transform: "scale(1)",
            opacity: 1,
          },
          "100%": {
            transform: "scale(0)",
            opacity: 0.5,
          },
        },
        bounce: {
          from: { transform: "translateY(-10px)" },
          to: { transform: "translateY(10px)" },
        },
        fade: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        scale: {
          "0%": {
            transform: "scaleY(0.4)",
          },
          "20%": {
            transform: "scaleY(1)",
          },
          "40%": {
            transform: "scaleY(0.4)",
          },
          "100%": {
            transform: "scaleY(0.4)",
          },
        },
        "clip-loader": {
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "clip-circle": {
          "0%": {
            strokeDasharray: "1,200",
            strokeDashoffset: "0",
          },
          "50%": {
            strokeDasharray: "90,200",
            strokeDashoffset: "-35px",
          },
          "100%": {
            strokeDashoffset: "-125px",
          },
        },
      },
      animation: {
        "zoom-in": "zoom-in 0.2s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "opacity-up": "opacity-up 0.15s ease-in-out",
        "opacity-down": "opacity-down 0.15s ease-in-out",
        "scale-up": "scale-up 0.15s ease-in-out",
        "scale-down": "scale-down 0.15s ease-in-out",
        "shift-right-in": "shift-right-in 0.15s ease-in-out",
        "shift-right-out": "shift-right-out 0.15s ease-in-out",
        "shift-left-in": "shift-left-in 0.15s ease-in-out",
        "shift-left-out": "shift-left-out 0.15s ease-in-out",
        "toast-in": "toast-in 0.15s ease-in-out",
        "toast-out": "toast-out 0.15s ease-in-out",
        skeleton: "skeleton 2s infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwindcss-animation-delay"),
  ],
};
