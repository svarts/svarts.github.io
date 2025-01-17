/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark": {
          "50": "#434343",
          "100": "#393939",
          "200": "#111027",
          "300": "#252525",
          "400": "#0c081c54",
          "500": "#0c081c54",
          "600": "#070707",
          "700": "#000000",
          "800": "#000000",
          "900": "#000000",
        },
        screens: {
          xs: "480px",
          ss: "620px",
          sm: "768px",
          md: "1060px",
          lg: "1200px",
          xl: "1700px",
        }
      },
    },
  },
  plugins: [],
}