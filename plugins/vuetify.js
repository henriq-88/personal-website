import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

import mdi from 'mdi/css/materialdesignicons.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: colors.shades.black,
    accent: colors.cyan.base,
    secondary: colors.blueGrey.darken4,
    info: colors.blue.base,
    warning: colors.orange.base,
    error: colors.red.base,
    success: colors.green.base
  }
})
