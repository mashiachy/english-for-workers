import ViteFonts from 'vite-plugin-fonts'

export default {
  plugins: [
    ViteFonts({
      google: {
        preconnect: true,
        display: 'block',
        families: [
          {
            name: 'Playfair Display',
            styles: 'wght@400;600',
            defer: false
          },
          {
            name: 'Source Sans Pro',
            styles: 'wght@300;400',
            defer: false
          },
        ],
      },
    }),
  ],
}