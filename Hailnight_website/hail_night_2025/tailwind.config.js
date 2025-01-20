/**@type {import{'tailwindcss'}.Config} */

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        csRoger: ['csRoger', 'sans'], // Fallback to sans-serif
       boran :["boran",'sans']
        
      },
    },
  },
  plugins: [],
};
