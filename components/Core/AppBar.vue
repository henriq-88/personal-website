<template>
  <v-app-bar
    color="transparent"
    app
    fixed
    :height="96"
  >
    <v-row v-ripple class="shrink py-3 px-6 clickable" no-gutters align="center" style="height: inherit; margin: -4px 0 -4px -16px;">
      <v-avatar color="grey darken-3">
        <v-icon large>
          mdi-account
        </v-icon>
      </v-avatar>
      <v-row class="flex-column ml-3" justify="center" no-gutters>
        <span class="body-1">Henrik Wassdahl</span>
        <span class="body-1 grey--text">UX Developer</span>
      </v-row>
    </v-row>
    <v-spacer />
    <v-tabs background-color="transparent" class="shrink" style="width: inherit;" color="white">
      <v-tab class="white--text" style="opacity: inherit;" @click="goTo(`#portfolio`)">
        Portfolio
      </v-tab>
      <v-tab class="white--text" style="opacity: inherit;" @click="goTo(`#about`)">
        About
      </v-tab>
      <v-tab class="white--text" style="opacity: inherit;" @click="goTo(`#contact`)">
        Contact
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    goTo (selector: string) {
      const options = {
        duration: 300,
        offset: 0,
        easing: 'easeInOutCubic'
      }
      this.$vuetify.goTo(selector, options)
    }
  }
})
</script>

<style scoped>
.v-toolbar.v-app-bar {
  backdrop-filter: blur(6px);
}
</style>
