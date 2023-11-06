/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@yext/chat-ui-react/lib/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}

