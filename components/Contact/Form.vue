<template>
  <v-container>
    <v-row
      class="display-4 grey--text text--darken-3"
      justify="center"
      no-gutters
    >
      Contact
    </v-row>
    <v-form
      ref="form_"
      v-model="valid_"
      lazy-validation
    >
      <v-text-field
        label="Name"
        outlined
        :rules="[ required() ]"
      />
      <v-text-field
        label="Email"
        outlined
        :rules="[ required(), email() ]"
      />
      <v-text-field
        label="Company / Organization (optional)"
        outlined
      />
      <v-textarea
        label="Message"
        outlined
        :rules="[ required() ]"
      />
    </v-form>
    <v-btn
      block
      large
      color="primary black--text"
      dark
    >
      Send
    </v-btn>
  </v-container>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins'
import { TranslatedVuetifyRule } from '../../types'
import { form } from '@/mixins'

export default mixins(form).extend({
  computed: {
    email (): TranslatedVuetifyRule {
      return this.$global.rules.email
    },
    required (): TranslatedVuetifyRule {
      return this.$global.rules.required
    }
  }
})
</script>
