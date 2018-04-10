<template>
  <v-toolbar
    app
    tabs
    fixed
    dark
    color="primary"
    scroll-off-screen :scroll-threshold="1"
    class="md-4 offset-md4">
    <v-container
      fluid
      class="pa-0">
      <v-layout row>
        <v-flex
            xs12
            sm10 offset-sm1
            md8 offset-md2
            lg6 offset-lg3>
          <v-layout row>
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
              exact
              nuxt>
              {{ item.text }}
            </v-tab>
          </v-tabs>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
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
        { text: 'About', url: '/about' }
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
