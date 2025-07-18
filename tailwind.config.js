// tailwind.config.js
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
        screens:{
            "sm":"480px"
        },
        spacing:{
          "big":"48rem"
        },
    },
    fontFamily:{
        nunito:['Nunito',sans-serif]
    }
  },
  plugins: [],
}
