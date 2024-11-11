import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography' // Cambiar require() a import

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/common/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Generals Colors
        'page-background': '#111111',
        'section-background': '#1F1F1F',
        'border-section': '#383838',

        // Text Colors
        'primary-text-color': '#D4D4D4',
        'secondary-text-color': '#FFFFFF',
        'irrelevant-text-color': '#444343',

        //! Colors Neon

        // Blue
        'blue-neon': '#01FFFF',
        'blue-neon-contrast': '#019999',

        // Orange
        'orange-neon': '#FF7300',
        'orange-neon-contrast': '#994500',

        // Yellow
        'yellow-neon': '#E6ED07',
        'yellow-neon-contrast': '#838704',

        // Red
        'red-neon': '#FE575F',
        'red-neon-contrast': '#983439',

        // Green
        'green-neon': '#2EF8A0',
        'green-neon-contrast': '#1B925E',

        // Pink
        'pink-neon': '#FF1493',

        // Purple
        'purple-neon': '#FF00FF',
      },
      fontSize: {
        ms: '0.625rem',
        title: '32px',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [
    typography, // Usamos la importación de tipo 'import'
  ],
}

export default config
