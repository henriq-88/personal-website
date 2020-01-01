<template>
  <v-container>
    <v-row
      id="portfolio"
      justify="center"
      no-gutters
    >
      <div class="display-4 grey--text text--darken-3">
        Portfolio
      </div>
    </v-row>
    <v-row>
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
    <v-row
      id="about"
      class="mt-12"
    >
      <v-col
        cols="8"
        offset="2"
      >
        <AboutText />
      </v-col>
    </v-row>
    <v-row
      id="contact"
      class="mt-12"
    >
      <v-col
        cols="8"
        offset="2"
      >
        <ContactForm />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { getModule } from 'vuex-module-decorators'
import AboutText from '@/components/About/Text.vue'
import ContactForm from '@/components/Contact/Form.vue'
import ProjectCard from '@/components/Project/Card.vue'
import projectsStore from '@/store/projects'

export default Vue.extend({
  components: {
    AboutText,
    ContactForm,
    ProjectCard
  },
  computed: {
    projects (): any[] {
      const projects = getModule(projectsStore, this.$store)
      return projects.projects
    }
  },
  mounted () {
    const projects = getModule(projectsStore, this.$store)
    projects.load()
  }
})
</script>

<style scoped>
.container {
  max-width: 1185px;
}
</style>
