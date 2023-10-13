import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': 'var(--primary-color)',
        'primary-darkest-color': 'var(--primary-darkest-color)',
        'primary-dark-color': 'var(--primary-dark-color)',
        'primary-light-color' :'var(--primary-light-color)',
        'primary-lightest-color': 'var(--primary-lightest-color)',
      },
      textColor: {
        'primary-color': 'var(--primary-color)',
        'primary-darkest-color': 'var(--primary-darkest-color)',
        'primary-dark-color': 'var(--primary-dark-color)',
        'primary-light-color' :'var(--primary-light-color)',
        'primary-lightest-color': 'var(--primary-lightest-color)',
      },
      backgroundColor: {
        'dark-bg': 'var(--pure-black-color)',
        'gray-bg-100': 'var(--gray-shade-100-color)',
        'gray-bg-200': 'var(--gray-shade-200-color)',
        'gray-bg-300': 'var(--gray-shade-300-color)',
        'gray-bg-400': 'var(--gray-shade-400-color)',
        'gray-bg-500': 'var(--gray-shade-500-color)',
      }
    },
  },
  plugins: [],
}
export default config
