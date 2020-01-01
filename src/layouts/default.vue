<template>
  <v-app dark>
    <Snackbar />
    <AppBar />
    <v-content>
      <v-container class="fill-height">
        <nuxt />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import AppBar from '@/components/Core/AppBar.vue'
import Footer from '@/components/Core/Footer.vue'
import Snackbar from '@/components/Core/Snackbar.vue'

export default {
  components: {
    AppBar,
    Footer,
    Snackbar
  },
  data: () => ({
    drawer: false,
    items: [
      {
        icon: `mdi-apps`,
        title: `Welcome`,
        to: `/`
      },
      {
        icon: `mdi-chart-bubble`,
        title: `Inspire`,
        to: `/inspire`
      }
    ]
  })
}
</script>

<style>
.theme--dark.v-application {
  background-color: black;
}
.clickable {
  cursor: pointer;
}
.transition {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
}
@media (min-width: 960px) and (max-width: 1264px) {
  .container {
    max-width: inherit;
  }
}
</style>
