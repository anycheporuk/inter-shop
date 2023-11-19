import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#3b82f6"
      }
    }
  },
  plugins: [],
} satisfies Config

