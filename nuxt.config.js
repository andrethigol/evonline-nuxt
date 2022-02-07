export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'novos-components',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // add your custom sass file
  css: [
    '@/assets/custom.scss'
  ],

  // add your plugin
  plugins: [
    // {
    //     type: 'text/javascript',
    //     src: '~/plugins/js/jquery.js',
    // }
    // {
    //     type: 'text/javascript',
    //     src: '~/assets/js/plugins.min.js',
    //     body: true
    // },
    // {
    //     type: 'text/javascript',
    //     src: '~/demos/writer/js/hover3d.js',
    //     body: true
    // },
    // {
    //     type: 'text/javascript',
    //     src: '~/demos/photographer/js/menu-easing.js',
    //     body: true
    // },
    // {
    //     type: 'text/javascript',
    //     src: '~/assets/js/functions.js',
    //     body: true
    // }

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // add bootstrap-vue module for nuxt
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // specify module rules for css and scss
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  
  // use these settings to use custom css
  bootstrapVue: {
    bootstrapCSS: false,
    icons: true,
  },
}
