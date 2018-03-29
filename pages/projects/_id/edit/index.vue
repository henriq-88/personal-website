<template>
  <EditProject :project="project"/>
</template>

<script>
import * as firebase from 'firebase'

import EditProject from '@/components/Projects/CreateEdit'

export default {
  components: {
    EditProject
  },
  data: () => ({
    loading: false,
    project: null
  }),
  mounted () {
    this.reloadProject()
  },
  methods: {
    async reloadProject () {
      this.loading = true
      try {
        this.project = await this.getProject()
      } catch (err) {

      }
      this.loading = false
    },
    async getProject () {
      const ref = firebase.firestore().doc(`projects/${this.$route.params.id}`)
      const snapshot = await ref.get()
      return snapshot.data()
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
