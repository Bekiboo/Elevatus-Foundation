module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        honey: '#FAB900',
        black: '#000',
        white: '#fff',
        gray: {
          100: '#f7fafc',
          // ...
          900: '#1a202c',
        },
      },
      screens: {
        'smm': {'max': '640px'},
      // => @media (max-width: 640px) { ... }
      }
    },
    fontFamily: {
      Poppins: ['Poppins, sans-serif'],
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        lg: '1124px',
        xl: '1124px',
        '2xl': '1124px',
      },
    },
    backgroundImage: {
      'cross-texture': "url('/img/misc/diagonal.png')",
    }
  },
}
