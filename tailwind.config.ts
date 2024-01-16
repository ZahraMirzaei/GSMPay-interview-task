import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-linear': 'linear-gradient(180deg, var(--light-violet) 0%, var(--dark-violet) 100%)'
      },

      colors: {
        "black": "#2f3a58"
      },
      textOpacity: {
        '60': '0.6',
        '80': '0.8',
      },
      screens: {
        "xs": "510px"
      }
    },
    boxShadow: {
      "md": "0px 12px 40px 0px rgba(45, 14, 152, 0.10)"
    }
  },
  plugins: [],
}
export default config
