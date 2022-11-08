/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'run-1': "url('static/images/running/run-1.jpg')",
        'run-2': "url('static/images/running/run-2.jpg')",
        'run-3': "url('static/images/running/run-3.jpg')",
        'work-1': "url('static/images/work/work-1.jpg')",
        'work-2': "url('static/images/work/work-2.jpg')",
        'work-3': "url('static/images/work/work-3.jpg')",
      },
    },
  },
  plugins: [],
};
