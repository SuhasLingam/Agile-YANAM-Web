/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      backgroundImage: {
        homeBg: "url('./assets/wave.svg')",
        homeBgMob: "url('./assets/wave-mob.svg')",
      },
    },
  },
  plugins: [],
};
