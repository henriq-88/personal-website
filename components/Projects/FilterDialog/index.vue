<template>
  <v-dialog v-model="filterDialog" max-width="500px">
    <v-card>
      <v-card-text>
        <v-select
          v-model="category"
          :items="categories"
          clearable
          label="Category"/>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          color="accent" flat
          @click.stop="filterDialog = false">
          Close
        </v-btn>
        <v-btn
          color="accent" flat
          @click="saveFilter">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import * as firebase from 'firebase'

export default {
  props: ['dialog', 'filters'],
  data: () => ({
    filterDialog: false,
    loading: false,
    category: null,
    categories: [],
    projectFilters: []
  }),
  mounted () {
    this.reloadCategories()
  },
  methods: {
    saveFilter () {
      this.$emit('update:filters', this.projectFilters)
      this.filterDialog = false
    },
    async reloadCategories () {
      this.loading = true
      try {
        this.categories = await this.getCategories()
      } catch (err) {
        console.error(err)
      }
      this.loading = false
    },
    async getCategories () {
      const ref = firebase.firestore().collection('categories')
      const categories = []
      const snapshots = await ref.get()
      snapshots.forEach(async snapshot => {
        const { id, name } = snapshot.data()
        const category = { text: name, value: snapshot.id }
        categories.push(category)
      })
      return categories
    },
  },
  watch: {
    dialog (dialog) {
      this.filterDialog = dialog
    },
    filterDialog (filterDialog) {
      this.$emit('update:dialog', filterDialog)
      this.projectFilters = this.filters
    },
    category (category) {
      if (!category) {
        this.projectFilters = []
        return  
      }
      this.projectFilters = [{ field: 'category', value: category }]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
