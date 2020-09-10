import Vue from 'vue'
import {
  Plugin,
} from '@nuxt/types'
import {
  TranslatedVuetifyRule,
} from '@/types'
import {
  TranslateResult,
} from 'vue-i18n'
import {
  icons,
} from '@/utils/tags'

const plugin: Plugin = (context, inject) => {
  const {
    i18n,
  }: any = context.app
  const globals = Object.freeze({
    rules: {
      email: ((errorMessage?: TranslateResult) => (v: any) => (/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(v)) || errorMessage || i18n?.t(`rules.error.email`)) as TranslatedVuetifyRule,
      required: ((errorMessage?: TranslateResult) => (v: any) => (v !== null && v !== undefined && String(v)
        .trim() !== ``) || errorMessage || i18n?.t(`rules.error.required`)) as TranslatedVuetifyRule,
    },
    tagIcons: icons,
  })

  inject(`global`, globals)
}

Vue.prototype.$sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default plugin
