import {
  TranslateResult,
} from 'vue-i18n'

export type Obj<T> = { [k: string]: T }

export type MediaType = `video` | `image`

export type Sorting = `asc` | `desc`

export type TranslatedVuetifyRule = (errorMessage?: TranslateResult) => (v: any) => boolean | TranslateResult

export interface Global {
  rules: {
    email: TranslatedVuetifyRule
    required: TranslatedVuetifyRule
  }
  tagIcons: Obj<string>
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

interface Media {
  url: string
  type: MediaType
}

interface Project {
  id: string
  banner?: string
  body: string
  category: string
  logo?: string
  medias: Media[]
  name: string
  tags: string[]
  website?: string
}

interface ClientProject extends Project {
  date: Date | null
}

interface ServerProject extends Project {
  date: firebase.firestore.Timestamp
}

interface TextValue {
  text: string
  value: string
  icon?: string
}
