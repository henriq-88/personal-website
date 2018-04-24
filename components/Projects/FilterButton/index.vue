<template>
  <v-btn
    class="filter-button"
    :color="filterColor"
    fab
    fixed
    top
    right>
    <v-icon v-if="!filterCount">filter_list</v-icon>
    <span v-else>{{ filterCount }}</span>
  </v-btn>
</template>

<script>
export default {
  computed: {
    filter () {
      return this.$store.getters.filter
    },
    filterCount () {
      let count = 0
      Object.keys(this.filter).forEach(field => {
        const value = this.filter[field]
        if (!value) return
        count++
      })
      return count
    },
    filterColor () {
      if (!this.filterCount) return 'grey lighten-2'
      return 'accent'
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
