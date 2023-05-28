/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "clearSky": "url('/bgkImages/clearsky.jpg')",
        "fewClouds":"url('/bgkImages/fewclouds.jpg')",
        "scateredClouds":"url('/bgkImages/scatteredclouds.jpg')",
        "bokenClouds":"url('/bgkImages/brokenclouds.jpg')",
        "showerRain":"url('/bgkImages/showerrain.jpg')",
        "rain":"url('/bgkImages/rain.jpg')",
        "tunderstorm":"url('/bgkImages/thunderstorm.jpg')",
        "snow":"url('/bgkImages/snow.jpg')",
        "mist":"url('/bgkImages/mist.jpg')",
      }
    },
  },
  plugins: [],
}

