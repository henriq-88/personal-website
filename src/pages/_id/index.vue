<template>
  <div>
    <v-parallax
      v-if="project.images.length && project.images[0]"
      :src="project.images[0].url"
      height="400"
    >
      <v-row
        class="fill-height"
        style="background-color: #00000080;"
      />
    </v-parallax>
    <div
      v-else
      class="grey"
      style="height: 400px;"
    />
    <v-container
      style="position: relative;"
      class="pt-8"
    >
      <v-row
        style="position: absolute; width: 100%;"
        :style="`top: -${logoSize}px;`"
        align="end"
      >
        <v-col class="shrink">
          <v-avatar
            tile
            :size="logoSize"
            class="elevation-4 grey darken-2"
          >
            <v-img
              v-if="project.logo"
              :src="project.logo"
              eager
            />
            <v-icon
              v-else
              :size="logoSize / 1.5"
            >
              mdi-cube-outline
            </v-icon>
          </v-avatar>
        </v-col>
        <v-col>
          <div class="display-3 mb-3">
            {{ project.name }}
          </div>
        </v-col>
      </v-row>
      <v-card light>
        <v-card-text>
          <v-img
            v-for="image in project.images"
            :key="image.url"
            :src="image.url"
            width="400"
          />
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { project } from '@/store/store'

export default Vue.extend({
  computed: {
    project () {
      return project.project
    },
    logoSize (): number {
      return 144
    }
  },

  created () {
    this.loadProject()
  },

  beforeDestroy () {
    project.clear()
  },

  methods: {
    loadProject () {
      const { id } = this.$route.params
      project.load(id)
    }
  }
})
</script>

<style scoped>
::v-deep .v-parallax__content {
  padding: 0;
}
</style>
