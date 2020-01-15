<template>
  <v-container>
    <v-row
      class="display-4 grey--text text--darken-3"
      no-gutters
      justify="center"
    >
      {{ $t(`common.about`) }}
    </v-row>
    <div v-html="aboutText" />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import about from '@/store/about'

export default Vue.extend({
  computed: {
    aboutText (): string {
      return about.text
    }
  },

  created () {
    about.load()
  }
})
</script>
