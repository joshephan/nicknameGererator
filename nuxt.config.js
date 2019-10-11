import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '바삭한 햇빛',
    title: '바삭한 햇빛',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '햇빛과 표현'},
      { property: 'og:site_title', content:'바삭한 햇빛'},
      { property: 'og:description', content:'햇빛이 맛있다. 햇빛이 까끌까끌하다. 햇빛이 날카롭다. 햇빛이 달콤하다. 햇빛이 새롭다. 햇빛이 놀랍다.'},
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
    }
  },
  generate: {
    fallback: true
  }
}
