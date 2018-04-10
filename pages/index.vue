<template>
  <v-container grid-list-md>
    <v-layout
      row wrap>
      <v-flex
        v-if="isSignedIn"
        md4 sm6 xs12>
        <ProjectThumbNew/>
      </v-flex>
      <v-flex
        v-for="(item, i) in items"
        :key="i"
        md4
        sm6
        xs12>
        <ProjectThumb
          :key="`transition-${i}`"
          :project="item"/>
      </v-flex>
    </v-layout>
    <v-btn
      class="filter-button"
      color="accent"
      fab
      fixed
      top
      right
      @click="filterDialog = true">
      <v-icon v-if="!filterCount">filter_list</v-icon>
      <span v-else>{{ filterCount }}</span>
    </v-btn>
    <ProjectFilterDialog
      :filters.sync="filters"
      :dialog.sync="filterDialog"/>
  </v-container>
</template>

<script>
import * as firebase from 'firebase'

import Head from '@/components/Mixins/Head'

import ProjectThumb from '@/components/Projects/Thumb'
import ProjectThumbNew from '@/components/Projects/Thumb/New'
import ProjectFilterDialog from '@/components/Projects/FilterDialog'

export default {
  mixins: [Head],
  components: {
    ProjectThumb,
    ProjectThumbNew,
    ProjectFilterDialog
  },
  data: () => ({
    loading: false,
    items: [],
    filters: [],
    filterDialog: false
  }),
  mounted () {
    this.getDataFromApi()
  },
  methods: {
    async getDataFromApi () {
      let ref = firebase.firestore()
        .collection('projects')
        .orderBy('date', 'desc')
      
      this.filters.forEach(filter => {
        ref = ref.where(filter.field, '==', filter.value)
      })

      this.loading = true
      try {
        this.items = []
        const items = []
        const snapshots = await ref.get()
        snapshots.forEach(async snapshot => {
          const { name, category, images, tags, date } = snapshot.data()
          const project = { id: snapshot.id, name, category, images, tags }
          items.push(project)
        })
  
        for (let i = 0; i < items.length; i++) {
          this.items.push(items[i])
          await new Promise(resolve => setTimeout(resolve, 100))
        }
      } catch (err) {
        console.error(err)
      }
      this.loading = false
    }
  },
  computed: {
    isSignedIn () {
      return this.$store.getters.isSignedIn
    },
    filterCount () {
      return 0
    }
  },
  watch: {
    filters () {
      this.getDataFromApi()
    }
  }
}
</script>

<style lang="scss" scoped>
  .filter-button {
    margin-top: 64px;
  }
</style>
