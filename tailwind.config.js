/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        karla: "karla",
      },
      maxWidth:{
        '550':'550px'
      },
      width:{
        "477":"477px",
        "222":"222px",
        "screen":"80vw",
      },
      gridTemplateColumns:{
        "40":" 40px 40px / 1fr 1fr"
      },
      
    },
  },
  plugins: [],
};
