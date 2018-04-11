<template>
  <v-slide-x-reverse-transition>
    <v-card>
      <nuxt-link
        to="/projects/new">
        <v-card-media
          class="grey white--text"
          height="266px">
          <v-container fill-height fluid>
            <v-layout row wrap align-center>
              <v-flex
                class="text-xs-center"
                xs12>
                <v-progress-circular indeterminate color="white"/>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
      </nuxt-link>
    </v-card>
  </v-slide-x-reverse-transition>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
a .project-title {
  text-decoration: none !important;
}
</style>