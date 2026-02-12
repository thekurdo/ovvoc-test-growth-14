module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a5f',
        },
        warmGray: {
          50: '#fafaf9',
          100: '#f5f5f4',
          500: '#78716c',
          900: '#1c1917',
        },
        trueGray: {
          50: '#fafafa',
          500: '#737373',
          900: '#171717',
        },
        coolGray: {
          50: '#f9fafb',
          500: '#6b7280',
          900: '#111827',
        },
        blueGray: {
          50: '#f8fafc',
          500: '#64748b',
          900: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      backgroundColor: ['active', 'group-hover'],
      textColor: ['group-hover'],
      borderColor: ['focus-visible'],
      ringWidth: ['focus-visible'],
    },
  },
  plugins: [],
};
