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
  })
}
</script>

<style lang="scss" scoped>
</style>
