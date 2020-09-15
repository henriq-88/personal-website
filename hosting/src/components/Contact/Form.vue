<template>
  <v-container>
    <v-row
      class="display-4 grey--text text--darken-3"
      justify="center"
      no-gutters
    >
      {{ $t(`common.contact`) }}
    </v-row>
    <v-form
      ref="form_"
      v-model="valid_"
      lazy-validation
    >
      <v-text-field
        v-model="name"
        label="Name"
        outlined
        :rules="[ rules.required() ]"
      />
      <v-text-field
        v-model="email"
        label="Email"
        outlined
        :rules="[ rules.required(), rules.email() ]"
      />
      <v-text-field
        v-model="organization"
        label="Company / Organization (optional)"
        outlined
      />
      <v-textarea
        v-model="message"
        label="Message"
        outlined
        :rules="[ rules.required() ]"
      />
    </v-form>
    <v-btn
      :disabled="!valid_"
      :loading="loadingSend"
      :aria-label="`Send`"
      block
      large
      color="primary black--text"
      dark
      @click="send"
    >
      {{ $t(`common.send`) }}
    </v-btn>
  </v-container>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins'
import {
  form,
} from '@/mixins'
import {
  messages,
} from '@/store/store'
import SnackbarModule from '@/store/snackbar'
import {
  getModule,
} from 'vuex-module-decorators'

export default mixins(form)
  .extend({
    data: () => ({
      name: ``,
      email: ``,
      organization: ``,
      message: ``,
      loadingSend: false,
    }),
    computed: {
      rules () {
        return this.$global.rules
      },
    },
    methods: {
      async send () {
        if (!this.validateForm()) return
        const {
          name, email, organization, message,
        } = this
        const snackbar = getModule(SnackbarModule, this.$store)
        this.loadingSend = true
        try {
          await messages.send({
            name, email, organization, message,
          })
          this.resetForm()
          snackbar.addSiteMessage({
            message: this.$t(`snackMessages.success.send`), type: `success`,
          })
        } catch (err) {
          snackbar.addSiteError({
            err, snackMessage: this.$t(`snackMessages.error.send`),
          })
        }
        this.loadingSend = false
      },
    },
  })
</script>
