/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
    './src/**/*.{html,js}',
    './courses/*.html',
    './resources/*.html'
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#07111F',
          light: '#0a192f',
          dark: '#040b15',
        },
        navy: {
          raised: '#102238',
          card: '#162b46',
        },
        paper: {
          DEFAULT: '#F5F8FC',
          dark: '#e9f0f8',
        },
        cyan: {
          electric: '#38D9F5',
          glow: '#20c8e6',
          muted: 'rgba(56, 217, 245, 0.15)',
        },
        action: {
          blue: '#165DDB',
          hover: '#124cb4',
        },
        body: '#172B44',
        muted: '#52647A',
        border: {
          soft: '#DCE5EF',
          dark: '#1e3c60',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(56, 217, 245, 0.25)',
        'glow-blue': '0 0 25px -5px rgba(22, 93, 219, 0.25)',
      }
    },
  },
  plugins: [],
}
