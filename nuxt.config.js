const colors = require(`vuetify/es5/util/colors`).default
// import messages from '@/locales'

export default {
  mode: `universal`,
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: `%s - ` + process.env.npm_package_name,
    title: process.env.npm_package_name || ``,
    meta: [
      { charset: `utf-8` },
      { name: `viewport`, content: `width=device-width, initial-scale=1` },
      { hid: `description`, name: `description`, content: process.env.npm_package_description || `` }
    ],
    link: [
      { rel: `icon`, type: `image/x-icon`, href: `/favicon.ico` }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: `#fff` },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: `@/plugins/filters` },
    { src: `@/plugins/firebase`, mode: `client` },
    { src: `@/plugins/globals` }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    `@nuxt/typescript-build`,
    // Doc: https://github.com/nuxt-community/eslint-module
    `@nuxtjs/eslint-module`,
    `@nuxtjs/vuetify`
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    `@nuxtjs/pwa`,
    // Doc: https://github.com/nuxt-community/dotenv-module
    [ `@nuxtjs/dotenv`, { filename: process.env.NODE_ENV === `development` ? `.env.local` : `.env` } ],
    [ `nuxt-i18n`,
      {
        locales: [
          { code: `en`, file: `en.ts` }
        ],
        defaultLocale: `en`,
        lazy: true,
        langDir: `locales/`
      }
    ]
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: [ `~/assets/variables.scss` ],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.shades.white,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.blue.accent4,
          warning: colors.orange.accent4,
          error: colors.red.accent4,
          success: colors.green.accent4
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
    },
    babel: {
      presets ({ isServer }) {
        return [
          [
            require.resolve(`@nuxt/babel-preset-app`),
            {
              buildTarget: isServer ? `server` : `client`,
              corejs: { version: 3 }
            }
          ]
        ]
      }
    }
  },
  srcDir: `src`,
  buildDir: `functions/.nuxt`,
  extractCSS: true
}
