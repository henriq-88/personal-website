<template>
  <v-dialog
    v-model="value_"
    max-width="768"
  >
    <v-card>
      <v-card-title>Filter</v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-select
              v-model="selectedCategory"
              label="Category"
              :items="categories"
              clearable
            />
          </v-col>
          <v-col>
            <v-select
              v-model="selectedSorting"
              label="Sort by"
              :items="sortings"
            />
          </v-col>
        </v-row>
        <v-combobox
          v-model="selectedTags"
          label="Tags"
          :items="tags"
          :item-text="item => `#${item.value}`"
          :item-value="item => item.value"
          :return-object="false"
          counter="10"
          chips
          multiple
          clearable
        >
          <template #selection="{ item }">
            <v-chip
              close
              @click:close="removeTag(item)"
            >
              #{{ item }}
            </v-chip>
          </template>
        </v-combobox>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          @click="clear"
        >
          Clear
        </v-btn>
        <v-spacer />
        <v-btn
          text
          @click="value_ = false"
        >
          Cancel
        </v-btn>
        <v-btn
          text
          @click="save"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins'
import { vModel } from '@/mixins'
import { categories, tags, projects } from '@/store/store'
import { TextValue, Sorting } from '@/types'
import { Location } from 'vue-router/types/router'

export default mixins(vModel).extend({
  data: () => ({
    selectedSorting: `asc` as Sorting,
    selectedTags: [] as string[],
    selectedCategory: ``
  }),
  computed: {
    sortings (): any[] {
      return [
        { text: `Newest`, value: `desc` },
        { text: `Oldest`, value: `asc` }
      ]
    },
    tags (): TextValue[] {
      return tags.tags
    },
    categories (): TextValue[] {
      return categories.categories
    }
  },
  watch: {
    value_ (value: boolean) {
      this.initValues()
      if (!value) return
      categories.load()
      tags.load()
    }
  },
  mounted () {
    const { sortby, category } = this.$route.query
    let { tags } = this.$route.query
    if (tags && !Array.isArray(tags)) tags = [ tags ]
    this.selectedSorting = sortby as Sorting
    if (category) this.selectedCategory = category as string
    if (tags && tags.length) this.selectedTags = tags as string[]
    this.save()
  },
  methods: {
    initValues () {
      this.selectedSorting = projects.sorting
      this.selectedCategory = projects.category
      this.selectedTags = projects.tags
    },
    save () {
      projects.setSorting(this.selectedSorting)
      projects.setCategory(this.selectedCategory)
      projects.setTags(this.selectedTags)
      const newRoute = { name: this.$route.name } as Location
      newRoute.query = {}
      if (this.selectedSorting) newRoute.query.sortby = this.selectedSorting
      if (this.selectedCategory) newRoute.query.category = this.selectedCategory
      if (this.selectedTags && this.selectedTags.length) newRoute.query.tags = this.selectedTags
      if (Object.keys(newRoute.query).length === 1 && newRoute.query.sortby === `desc`) delete newRoute.query
      this.$router.replace(newRoute).catch(e => {})
      const force = true
      projects.load(force)
      this.value_ = false
    },
    removeTag (tag: string) {
      const index = this.selectedTags.indexOf(tag)
      if (!~index) return
      this.selectedTags.splice(index, 1)
    },
    clear () {
      this.selectedSorting = `desc`
      this.selectedCategory = ``
      this.selectedTags = []
    }
  }
})
</script>
