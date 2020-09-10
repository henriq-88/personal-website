<template>
  <v-app dark>
    <Snackbar />
    <NavigationDrawer v-model="drawer" />
    <AppBar v-model="drawer" />
    <v-content>
      <v-container
        fluid
        class="pa-0"
      >
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
import NavigationDrawer from '@/components/Core/NavigationDrawer.vue'

export default {
  components: {
    AppBar,
    Footer,
    Snackbar,
    NavigationDrawer,
  },

  data: () => ({
    drawer: false,
  }),
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
.no-transition {
  transition: none;
}
.fill-width {
  width: 100%;
}
@media (min-width: 960px) and (max-width: 1264px) {
  .container {
    max-width: inherit;
  }
}
</style>

<style scoped>
::v-deep .v-skeleton-loader__image {
  height: inherit;
  width: inherit;
}
::v-deep .container {
  max-width: 1185px;
}
::v-deep .container--fluid {
  max-width: 100% !important;
}
::v-deep .v-tooltip__content {
  background: rgba(0, 0, 0, 1.0);
}
::v-deep .v-overlay--active {
  backdrop-filter: blur(6px);
}
</style>
