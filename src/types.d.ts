import { TranslateResult } from 'vue-i18n'

export type TranslatedVuetifyRule = (errorMessage?: TranslateResult) => (v: any) => boolean | TranslateResult

export interface Global {
  rules: {
    email: TranslatedVuetifyRule
    required: TranslatedVuetifyRule
  }
}

export interface ContactMessage {
  name: string
  email: string
  organization?: string
  message: string
}

export interface SnackbarMessage {
  message: TranslateResult
  type: string
  code: string | number | null
  timeout?: number
  snackMessage: TranslateResult
}

export interface SiteMessage {
  clear?: boolean
  message?: TranslateResult
  type?: string
  code?: string
  snackMessage?: string
}

export interface SiteError extends Error {
  snackMessage?: string
  code?: string | number
}

interface Project {
  id: string
  body: string
  category: string
  images: string[]
  name: string
  tags: string[]
}

interface ClientProject extends Project {
  date: Date
}

interface ServerProject extends Project {
  date: firebase.firestore.Timestamp
}
