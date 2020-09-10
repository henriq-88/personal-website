/**
 * When using this mixin add
 * ref="form_" to your form
 */

import {
  VuetifyForm,
} from '@/plugins/vuetify/types'
import Vue, {
  VueConstructor,
} from 'vue'

export default (Vue as VueConstructor<
  Vue & {
    $refs: {
      form_: VuetifyForm
    }
  }
>).extend({
  data: () => ({
    valid_: true,
  }),
  methods: {
    resetForm () {
      if (!this.$refs.form_) return
      return this.$refs.form_.reset()
    },
    validateForm (): boolean {
      if (!this.$refs.form_) return true
      return this.$refs.form_.validate()
    },
    resetFormValidation () {
      if (!this.$refs.form_) return
      return this.$refs.form_.resetValidation()
    },
  },
})
