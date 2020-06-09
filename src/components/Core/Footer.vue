<template>
  <v-footer
    app
    absolute
    color="transparent"
    :height="96"
    class="flex-column"
  >
    <v-row>
      <v-btn
        v-for="link in links"
        :key="link.icon"
        icon
        :color="link.color"
        class="mx-2"
        target="_blank"
        :href="link.url"
      >
        <v-icon>{{ link.icon }}</v-icon>
      </v-btn>
    </v-row>
    <v-row>
      <v-spacer />
      <span class="grey--text">&copy; {{ year }} Henrik Wassdahl</span>
      <v-spacer />
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    links: [
      { url: `https://www.facebook.com/henrik.wassdahl`, icon: `mdi-facebook` },
      { url: `https://github.com/henriq-88`, icon: `mdi-github` },
      { url: `https://bitbucket.org/Seline88`, icon: `mdi-bitbucket` },
      { url: `https://www.linkedin.com/in/henrikwassdahl`, icon: `mdi-linkedin` },
      { url: `https://stackoverflow.com/users/2375978/henrik-wassdahl`, icon: `mdi-stack-overflow` }
    ]
  }),

  computed: {
    year (): number {
      return new Date().getFullYear()
    }
  }
})
</script>
