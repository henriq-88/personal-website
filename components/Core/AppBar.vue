<template>
  <v-app-bar
    v-scroll="updateLinkIndicator"
    color="transparent"
    app
    fixed
    :height="96"
  >
    <v-row
      v-ripple
      class="shrink py-3 px-6 clickable"
      no-gutters
      align="center"
      style="height: inherit; margin: -4px 0 -4px -16px;"
      @click="goTo(0)"
    >
      <v-avatar color="grey-darken-3">
        <v-img :src="require(`@/assets/me.jpg`)" />
      </v-avatar>
      <v-row
        class="flex-column ml-3"
        justify="center"
        no-gutters
      >
        <span class="body-1">Henrik Wassdahl</span>
        <span class="body-1 grey--text">UX Developer</span>
      </v-row>
    </v-row>
    {{ $t('greeting') }}
    <v-spacer />
    <v-tabs
      v-model="linkIndex"
      background-color="transparent"
      class="shrink"
      style="width: inherit;"
      color="white"
    >
      <v-tab
        v-for="link in links"
        :key="link.selector"
        class="white--text"
        style="opacity: inherit;"
        @click="goTo(link.selector)"
      >
        {{ link.text }}
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins'
import { GoToOptions } from 'vuetify/types/services/goto'

export default mixins().extend({
  data: () => ({
    linkIndex: 0,
    linkIndicatorUpdateDisabled: false,
    headerPositions: [] as any[]
  }),

  computed: {
    links (): any[] {
      return [
        { text: `Portfolio`, selector: `#portfolio` },
        { text: `About`, selector: `#about` },
        { text: `Contact`, selector: `#contact` }
      ]
    }
  },

  methods: {
    async goTo (selector: string | number) {
      const duration = 300
      const options: GoToOptions = {
        duration,
        offset: 0,
        easing: `easeInOutCubic`
      }
      this.linkIndicatorUpdateDisabled = true
      if (typeof selector === `number`) { this.linkIndex = 0 }
      this.$vuetify.goTo(selector, options)
      await new Promise(resolve => setTimeout(resolve, duration * 1.1))
      this.linkIndicatorUpdateDisabled = false
    },
    getHeaderPositions () {
      this.headerPositions = this.links.map(link => document.querySelector(link.selector)?.offsetTop)
    },
    updateLinkIndicator (event: Event) {
      if (this.linkIndicatorUpdateDisabled) { return }
      this.getHeaderPositions()
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop
      this.linkIndex = this.getLinkIndex(scrollPosition)
    },
    getLinkIndex (scrollPosition: number): number {
      const scrolledToBottom = document.body.scrollHeight === scrollPosition + window.innerHeight
      if (scrolledToBottom) { return this.headerPositions.length - 1 }
      for (let i = this.headerPositions.length - 1; i > 0; i--) {
        if (scrollPosition >= (this.headerPositions[i] - window.innerHeight / 2)) { return i }
      }
      return 0
    }
  }
})
</script>

<style scoped>
.v-toolbar.v-app-bar {
  backdrop-filter: blur(6px);
}
</style>
