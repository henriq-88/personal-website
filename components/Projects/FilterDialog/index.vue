<template>
  <v-dialog v-model="filterDialog" max-width="500px">
    <v-card>
      <v-card-title>
        <div class="title">Project Filter</div>
      </v-card-title>
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
          :disabled="!filterChanged"
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
  props: ['dialog'],
  data: () => ({
    filterDialog: false,
    loading: false,
    category: null,
    categories: [],
  }),
  mounted () {
    this.reloadCategories()
  },
  methods: {
    saveFilter () {
      this.filterDialog = false
      const filter = { category: this.category }
      this.$store.dispatch('updateFilter', filter)
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
    initFilter () {
      Object.keys(this.filter).forEach(field => {
        const value = this.filter[field]
        switch (field) {
          case 'category':
            this.category = value
            break
        }
      })
    }
  },
  computed: {
    filter () {
      return this.$store.getters.filter
    },
    filterChanged () {
      return this.filter.category !== this.category
    }
  },
  watch: {
    dialog (dialog) {
      if (dialog) this.initFilter()
      this.filterDialog = dialog
    },
    filterDialog (filterDialog) {
      this.$emit('update:dialog', filterDialog)
    },
    filter: {
      handler (filter) {
        this.category = filter.category
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
