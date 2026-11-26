export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    borderRadius: { none: '0', sm: '2px', DEFAULT: '2px', full: '9999px' },
    extend: {
      colors: {
        ink: '#0A1017', slate2: '#111A24', line: '#223040',
        paper: '#EDEFF1', heat: '#FF6A2B', chill: '#38B6FF', mag: '#E0287A',
      },
      fontFamily: {
        display: ['Archivo', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
}
