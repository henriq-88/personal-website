<template>
  <v-container>
    <v-row class="display-4 grey--text text--darken-3" justify="center" no-gutters>
      Contact
    </v-row>
    <v-form>
      <v-text-field label="Name" outlined />
      <v-text-field label="Email" outlined />
      <v-text-field label="Company / Organization (optional)" outlined />
      <v-textarea label="Message" outlined />
    </v-form>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
})
</script>
