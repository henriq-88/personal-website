import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { Framework } from 'vuetify'
import { Store } from 'vuex'
import { Global } from '@/types'

declare module "*.vue" {
  export default Vue
}

declare module 'vue/types/vue' {
  // instance properties and methods e.g. "this.$route"
  interface Vue {
    $sleep(ms: number): Promise<void>
    $global: Global
    $vuetify: Framework
  }

  interface VueConstructor {
    i18n: VueI18n
  }
}
