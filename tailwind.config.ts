import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // primary: {
        //   DEFAULT: '#000000',
        //   light: '#333333',
        // },
      },
      fontFamily: {
        // sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config

