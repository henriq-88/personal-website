import Vue from 'vue'

export interface VueComponent {
  _uid: number
}

export interface VuetifyForm extends Vue, VueComponent {
  validate: () => boolean
  reset: () => void
  resetValidation: () => void
}
