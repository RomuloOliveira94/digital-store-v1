/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {},
    extend: {
      colors: {
        darkgray: "#1F1F1F",
        ligthgray: "#8F8F8F",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        storelight: {
          primary: "#C92071",
          secondary: "#B5B6F2",
          accent: "#991956",
          error: "#EE4266",
          success: "#52CA76",
          warning: "#F6AA1C",
        },
      },
      "dark",
    ],
  },
};
