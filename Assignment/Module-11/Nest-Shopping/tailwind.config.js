/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "text-slide":
          "text-slide 5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
          "menu-transition":"20s cubic-bezier(0.83, 0, 0.17, 1)",
      },
      keyframes: {
        "text-slide": {
          "0%, 20%": {
            transform: "translateY(0%)",
          },
          "20%, %40": {
            transform: "translateY(-20%)",
          },
          "40%, 60%": {
            transform: "translateY(-30%)",
          },
          "60%, 80%": {
            transform: "translateY(-50%)",
          },
          "100%": {
            transform: "translateY(-75%)",
          },

        },
      },

    },
  },
  plugins: [],
};