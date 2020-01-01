import { TranslateResult } from 'vue-i18n'

export type TranslatedVuetifyRule = (errorMessage?: TranslateResult) => (v: any) => boolean | TranslateResult

export interface Global {
  rules: {
    email: TranslatedVuetifyRule
    required: TranslatedVuetifyRule
  }
}
