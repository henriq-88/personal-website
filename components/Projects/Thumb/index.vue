<template>
  <v-slide-x-reverse-transition>
    <v-card>
      <nuxt-link
        :to="projectLink">
        <v-card-media
          class="white--text"
          :class="!projectImage ? $globals.category[project.category].color : ''"
          height="200px"
          :src="projectImage">
          <v-container fill-height>
            <v-layout>
              <v-flex xs12>
                <span class="project-title text-shadow headline">{{ projectName }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
      </nuxt-link>
      <v-card-text v-if="project">
        <v-layout row>
          <v-chip
            :color="$globals.category[project.category].color"
            text-color="white">
            {{ $globals.category[project.category].name }}
          </v-chip>
          <v-spacer/>
          <div>
            <v-btn
              class="ma-0"
              v-for="tag in projectTags" :key="tag.name"
              :title="$globals.tags[tag].name"
              flat
              small
              icon>
              <v-icon
                small
                color="secondary">
                {{ $globals.tags[tag].icon }}
              </v-icon>
            </v-btn>
          </div>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-slide-x-reverse-transition>
</template>

<script>
export default {
  props: ['project'],
  computed: {
    projectLink () {
      if (!this.project) return '/projects/new'
      return `/projects/${this.project.id}`
    },
    projectName () {
      if (!this.project) return 'Create New'
      return this.project.name
    },
    projectImage () {
      if (!this.project) return ''
      if (!this.project.images || this.project.images.length === 0) return ''
      return this.project.images[0].url
    },
    projectTags () {
      if (!this.project) return null
      return this.project.tags.sort((a, b) => {
        if (a > b) return 1
        else if (a < b) return -1
        return 0
      })
    }
  }
}
</script>

<style lang="scss" scoped>
a .project-title {
  text-decoration: none !important;
}
</style>
