import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {
  Framework,
} from 'vuetify'
import {
  Store,
} from 'vuex'
import {
  Global,
} from '@/types'
import {
  Device,
} from '@nuxtjs/device/lib/types'
import {
  Route,
} from 'vue-router'

// eslint-disable-next-line
declare module '*.vue' {
  export default Vue
}

// eslint-disable-next-line
declare module 'vue/types/vue' {
  // instance properties and methods e.g. "this.$route"
  interface Vue {
    $isEqual<T>(o1: T, o2: T): boolean,
    $copy<T>(object: T): T,
    $sleep(ms: number): Promise<void>
    $global: Global
    $vuetify: Framework
    $device: Device
    $store: Store<any>
    $route: Route
  }

  interface VueConstructor {
    i18n: VueI18n
  }
}

declare global {
  interface Window {
    onNuxtReady(obj: object): void
  }
}
