module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#6388B4",
        "dark-green": "#3D7B79",
        "darker-green": "#295453",
        "dark-blue": "#335068",
        "darker-blue": "#233747",
        "dark-sky": "#6388B4",
        "dark-gray": "#BFC0C0",
        "dark": "#262626",
        "light-dark-blue": "#3D7B79",
        "light-dark-gray": "#BFC0C0",
        "dark-small-text": "#485555"
      },
      scale: {
        "115": "1.15"
      }
    },
  },
  plugins: [],
}