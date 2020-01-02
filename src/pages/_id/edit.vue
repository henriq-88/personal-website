<template>
  <div>{{ project }}</div>
</template>

<script lang="ts">
import Vue from 'vue'
import { project } from '@/store/store'

export default Vue.extend({
  computed: {
    project () {
      return project.project
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
