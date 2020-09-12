<template>
  <v-container class="pa-0">
    <v-row
      style="height: calc(100vh - 72px);"
      no-gutters
    >
      <v-col cols="12">
        <v-row
          class="flex-column fill-height"
          justify="center"
          align="center"
          no-gutters
        >
          <AboutText />
        </v-row>
      </v-col>
    </v-row>
    <v-row
      id="portfolio"
      justify="center"
      no-gutters
    >
      <div class="display-4 grey--text text--darken-3">
        {{ $t(`common.portfolio`) }}
      </div>
    </v-row>
    <v-row v-if="projects.length">
      <v-col
        v-for="p in projects"
        :key="p.id"
        cols="12"
        sm="6"
        md="4"
      >
        <ProjectCard :project="p" />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col
        v-for="n in 9"
        :key="`project-placeholder-${n}`"
        cols="12"
        sm="6"
        md="4"
      >
        <v-skeleton-loader
          type="image"
          tile
          height="256"
        />
      </v-col>
    </v-row>
    <v-row
      id="contact"
      class="mt-12"
    >
      <v-col
        cols="12"
        sm="8"
        offset="0"
        offset-sm="2"
      >
        <ContactForm />
      </v-col>
    </v-row>
    <FilterButton />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import AboutText from '@/components/About/Text.vue'
import ContactForm from '@/components/Contact/Form.vue'
import FilterButton from '@/components/Filter/Button.vue'
import ProjectCard from '@/components/Project/Card.vue'
import {
  projects,
} from '@/store/store'

export default Vue.extend({
  components: {
    AboutText,
    ContactForm,
    FilterButton,
    ProjectCard,
  },
  data: () => ({
    filterDialog: false,
  }),
  computed: {
    projects (): any[] {
      return projects.projects
    },
  },
  mounted () {
    projects.load()
  },
})
</script>
