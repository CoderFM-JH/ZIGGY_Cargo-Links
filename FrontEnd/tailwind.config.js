import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui], // seulement les plugins Tailwind ici
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}
// !-- IGNORE ---