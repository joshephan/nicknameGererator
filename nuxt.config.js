import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '닉네임 생성기',
    title: '닉네임 생성기',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '닉네임 생성기'},
      { property: 'og:site_title', content:'닉네임 생성기'},
      { property: 'og:description', content:'한국어 닉네임 생성기 중 마음에 드는게 없어서 한 번 만들어보자 싶어 만들어봤는데, 막상 해보니 어려운 것 같습니다.'},
      { property: 'og:image', content: '/sun.png'},
      { property: 'og:image:width', content: '128'},
      { property: 'og:image:height', content: '128'},
      { property: 'og:image:type', content: 'image/jpeg'},
      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/sun.png' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Gugi|Hi+Melody|Kirang+Haerang|Nanum+Brush+Script|Nanum+Myeongjo|Noto+Serif+KR|Yeon+Sung&display=swap"}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.amber.darken4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
   extend (config, ctx) {
    config.module.rules.push({
      enforce: 'pre',
      test: /\.txt$/,
      loader: 'raw-loader',
      exclude: /(node_modules)/
    });
  }
  },
  generate: {
    fallback: true
  }
}
