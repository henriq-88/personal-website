<template>
  <v-container>
    <v-row class="flex-nowrap">
      <v-col class="flex-grow-0 ">
        <v-img
          src="/me.jpg"
          width="400"
        >
          <v-row
            class="fill-height profile-image-container"
            no-gutters
          />
        </v-img>
      </v-col>
      <v-col>
        <v-row
          no-gutters
          justify="center"
          class="flex-column fill-height"
        >
          <v-row
            class="display-3 text-uppercase flex-grow-0"
            no-gutters
            justify="end"
          >
            Henrik Wassdahl
          </v-row>
          <v-row
            class="display-4 text-uppercase flex-grow-0"
            no-gutters
            justify="end"
          >
            <v-col class="font-weight-bold flex-grow-0">
              UX&nbsp;
            </v-col>
            <v-col class="text-uppercase flex-grow-0">
              Developer
            </v-col>
          </v-row>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import about from '@/store/about'

export default Vue.extend({
  computed: {
    aboutText (): string {
      return about.text
    },
  },

  // created () {
  //   about.load()
  // },
})
</script>

<style lang="scss" scoped>
  .profile-image-container {
    box-shadow: inset 0 0 2em 4em black;
    transform: scale(1.1);
  }
</style>
