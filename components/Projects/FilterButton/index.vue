<template>
  <v-btn
    class="filter-button"
    color="accent"
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
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
