module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add paths to all your template files
  ],
  theme: {
    extend: {
      colors:{
        principal: "#2D1C4B",
        principalToneDown: "#56496e",
        secondario: "#E0DBEF",
        acentos: "#8075BA",
        fondo: "#DAD8ED",
        texto: "#07090E"
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
};