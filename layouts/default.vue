<template>
  <v-app>
    <Toolbar/>
    <v-content>
      <v-container fluid :style="'max-width: 840px'">
        <nuxt/>
      </v-container>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Toolbar from '@/components/Core/Toolbar'
import Footer from '@/components/Core/Footer'

export default {
  components: {
    Toolbar,
    Footer
  },
  data: () => ({
    clipped: false,
    drawer: true,
    fixed: false,
    items: [
      { icon: 'apps', title: 'Welcome', to: '/' },
      { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
    ],
    miniVariant: false,
    right: true,
    rightDrawer: false,
    title: 'Vuetify.js'
  })
}
</script>

<style lang="scss">
  .clickable {
    cursor: pointer;
  }

  .text-shadow {
    text-shadow: 0 2px 2px #333;
  }

  a:-webkit-any-link {
    text-decoration: none;
  }
</style>
