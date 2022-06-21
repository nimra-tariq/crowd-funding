/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'donation-img': "url('../public/donation.jpg')",
      },
      height:{
        'hero-height':"100vh",
      },
    },
  },
  plugins: [],
}
