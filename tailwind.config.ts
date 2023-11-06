import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      creteRound:['Crete Round','serif'],
      poppins:['Poppins', 'sans-serif']
    },
    extend: {
      colors:{
        "nav-black":"#3C3A39",
        "main-background":"#1C1A19",
        "app-orange":"#FF6B00",
        "intro-white":"#FFF5E1"
      },
      backgroundImage: {
        'mobile-bg': "url('/src/images/illustration-header-mobile.png')",
      }
      
    },
  },
  plugins: [],
}
export default config
