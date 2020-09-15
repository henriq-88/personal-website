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
        :href="link.url"
        :aria-label="`${link.name} profile`"
        icon
        class="mx-2"
        target="_blank"
        rel="noreferrer"
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
      {
        url: `https://www.facebook.com/henrik.wassdahl`,
        icon: `mdi-facebook`,
        name: `Facebook`,
      },
      {
        url: `https://github.com/henriq-88`,
        icon: `mdi-github`,
        name: `Github`,
      },
      {
        url: `https://bitbucket.org/Seline88`,
        icon: `mdi-bitbucket`,
        name: `Bitbucket`,
      },
      {
        url: `https://www.linkedin.com/in/henrikwassdahl`,
        icon: `mdi-linkedin`,
        name: `LinkedIn`,
      },
      {
        url: `https://stackoverflow.com/users/2375978/henrik-wassdahl`,
        icon: `mdi-stack-overflow`,
        name: `StackOverflow`,
      },
    ],
  }),

  computed: {
    year (): number {
      return new Date()
        .getFullYear()
    },
  },
})
</script>
