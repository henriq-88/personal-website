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
    <v-tabs v-model="linkIndex" background-color="transparent" class="shrink" style="width: inherit;" color="white">
      <v-tab class="white--text" style="opacity: inherit;" @click.prevent="goTo(`#portfolio`)">
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
// import Vue, { VueConstructor } from 'vue'
import mixins from 'vue-typed-mixins'

export default mixins().extend({
  data: () => ({
    linkIndex: 0,
    linkIndicatorUpdateDisabled: false
  }),
  methods: {
    async goTo (selector: string | number) {
      const duration = 300
      const options = {
        duration,
        offset: 0,
        easing: 'easeInOutCubic'
      }
      this.linkIndicatorUpdateDisabled = true
      if (typeof selector === 'number') { this.linkIndex = 0 }
      this.$vuetify.goTo(selector, options)
      await new Promise(resolve => setTimeout(resolve, duration * 1.1))
      this.linkIndicatorUpdateDisabled = false
    },
    updateLinkIndicator (event: Event) {
      if (this.linkIndicatorUpdateDisabled) { return }
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop
      this.linkIndex = this.getLinkIndex(scrollPosition)
    },
    getLinkIndex (scrollPosition: number): number {
      if (scrollPosition <= 170) { return 0 } else if (scrollPosition <= 800) { return 1 } else { return 2 }
    }
  }
})
</script>

<style scoped>
.v-toolbar.v-app-bar {
  backdrop-filter: blur(6px);
}
</style>
