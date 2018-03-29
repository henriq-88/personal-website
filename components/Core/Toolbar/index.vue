<template>
  <v-toolbar
    app
    tabs
    fixed
    dark
    color="primary"
    scroll-off-screen :scroll-threshold="1">
    <v-toolbar-title>
      Henrik Wassdahl
      <div class="body-2">UX Developer</div>
    </v-toolbar-title>
    <v-spacer/>
    <v-tabs
      color="primary"
      right
      style="width: inherit">
      <v-tabs-slider/>
      <v-tab
        v-for="(item, i) in items"
        :key="i"
        :to="item.url"
        nuxt>
        {{ item.text }}
      </v-tab>
    </v-tabs>
  </v-toolbar>
</template>

<script>
export default {
  computed: {
    isSignedIn () {
      return this.$store.getters.isSignedIn
    },
    items () {
      const items = [
        { text: 'Home', url: '/' },
        { text: 'Projects', url: '/projects' },
        { text: 'About', url: '/about' },
        { text: 'Contact', url: '/contact' }
      ]
      if (this.isSignedIn) {
        items.push({ text: 'Sign Out', url: '/signOut'})
      }
      return items
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
