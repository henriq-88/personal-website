<template>
  <v-app>
    <Toolbar/>
    <v-content>
      <v-container
        fluid
        class="px-0 ma-0">
        <v-layout row>
          <v-flex
            xs12
            sm10 offset-sm1
            md8 offset-md2
            lg6 offset-lg3>
            <nuxt/>
          </v-flex>
        </v-layout>
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
