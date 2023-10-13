import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '800px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      screens:{
        'xs': '320px',
        'micro': '280px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mainBg': "url('/mainBg.png')",
        'electronic-paths': "url('/backgrounds/Electronic-Paths.png') bottom no-repeat",
        'floating-bg': "url('/backgrounds/Floating_bg.png')",
        'floating-bg-desktop': "url('/backgrounds/Floating_bg_desktop.svg')",
        'frotune-digital': "url('/backgrounds/fortuneDigital.svg')",
      },
      colors:{
        'light-blue':'#42778C',
        'dark-blue':'#1D3F4F',
        'grey-blue': '#0F2C3A',
        'light-orange': '#EF7D7E',
        'pink-orange': '#F3668E',
        'text-orange': '#EB646A',
        'light-grey' : '#9AA2A6',
        'light-grey-bg': "#EFEAE4",
        'dark-text': "#102E3C",
        'almost-white': "#F9F8F5E5",
      },
      fontFamily:{
        'poppins': ["var(--font-poppins)"],
      }
    },
  },
  daisyui:{
    base: false,
  },
  plugins: [require('daisyui')],
}
export default config
