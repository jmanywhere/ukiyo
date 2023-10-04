import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'mainBg': "url('/mainBg.png')",
      },
      colors:{
        'light-blue':'#42778C',
        'dark-blue':'##1D3F4F',
        'grey-blue': '#0F2C3A',
        'light-orange': '#EF7D7E',
        'pink-orange': '#F3668E',
        'text-orange': '#EB646A',
        'light-grey' : '#EFF5F8'
      }
    },
  },
  daisyui:{
    base: false,
  },
  plugins: [require('daisyui')],
}
export default config
