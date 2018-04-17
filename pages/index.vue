<template>
  <v-container grid-list-md>
    <v-alert
      v-if="!loading && items.length === 0"
      type="info"
      :value="true">
      No data found.
    </v-alert>
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
    <ProjectFilterButton
      @click.native="filterDialog = true"/>
    <ProjectFilterDialog
      :dialog.sync="filterDialog"/>
  </v-container>
</template>

<script>
import * as firebase from 'firebase'

import Head from '@/components/Mixins/Head'

import ProjectThumb from '@/components/Projects/Thumb'
import ProjectThumbNew from '@/components/Projects/Thumb/New'
import ProjectThumbLoading from '@/components/Projects/Thumb/Loading'
import ProjectFilterDialog from '@/components/Projects/FilterDialog'
import ProjectFilterButton from '@/components/Projects/FilterButton'

export default {
  mixins: [Head],
  components: {
    ProjectThumb,
    ProjectThumbNew,
    ProjectThumbLoading,
    ProjectFilterDialog,
    ProjectFilterButton
  },
  data: () => ({
    loading: false,
    items: [],
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
      
      if (this.filter) {
        Object.keys(this.filter).forEach(field => {
          const value = this.filter[field]
          if (!value) return
          ref = ref.where(field, '==', value)
        })

        this.items = this.items.filter(item => {
          const fields = Object.keys(this.filter)
          for (let i = 0; i < fields.length; i++) {
            const field = fields[i]
            const value = this.filter[field]
            if (!value) continue
            return value === item[field]
          }
          return true
        })
        this.items.sort((a, b) => {
          if (a.date < b.date) return 1
          else if (a.date > b.date) return -1
          return 0
        })
      }

      this.loading = true
      try {
        const items = []
        const snapshots = await ref.get()
        snapshots.forEach(async snapshot => {
          const { name, category, images, tags, date } = snapshot.data()
          const project = { id: snapshot.id, name, category, images, tags, date }
          items.push(project)
        })
  
        for (let i = 0; i < items.length; i++) {
          const item = items[i]
          const index = this.items.findIndex(alreadyAddedItem => alreadyAddedItem.id === item.id)
          if (index !== -1) continue
          this.items.push(item)
          this.items.sort((a, b) => {
            if (a.date < b.date) return 1
            else if (a.date > b.date) return -1
            return 0
          })
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
    filter () {
      return this.$store.getters.filter
    }
  },
  watch: {
    filter: {
      handler () {
        this.getDataFromApi()
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .filter-button {
    margin-top: 64px;
  }
</style>
