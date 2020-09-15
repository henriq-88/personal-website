<template>
  <v-dialog
    v-model="value_"
    max-width="768"
  >
    <v-card>
      <v-card-title>
        Filter
        <v-btn
          :aria-label="`Close`"
          absolute
          top
          right
          icon
          @click="value_ = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col>
            <v-select
              v-model="selectedCategory"
              :items="categories"
              label="Category"
              clearable
              outlined
            />
          </v-col>
          <v-col>
            <v-select
              v-model="selectedSorting"
              :items="sortings"
              label="Sort by"
              outlined
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
          outlined
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
        <v-row
          no-gutters
          justify="center"
        >
          <v-btn
            :aria-label="`Clear filter`"
            text
            outlined
            @click="clear"
          >
            Clear
          </v-btn>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn
          :aria-label="`Cancel`"
          text
          @click="value_ = false"
        >
          Cancel
        </v-btn>
        <v-btn
          :aria-label="`Save`"
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
import {
  vModel,
} from '@/mixins'
import {
  categories, tags, projects,
} from '@/store/store'
import {
  TextValue, Sorting,
} from '@/types'
import {
  Location,
} from 'vue-router/types/router'

export default mixins(vModel)
  .extend({
    data: () => ({
      selectedSorting: `desc` as Sorting,
      selectedTags: [
      ] as string[],
      selectedCategory: ``,
    }),
    computed: {
      sortings (): any[] {
        return [
          {
            text: `Newest`, value: `desc`,
          },
          {
            text: `Oldest`, value: `asc`,
          },
        ]
      },
      tags (): TextValue[] {
        return tags.tags
      },
      categories (): TextValue[] {
        return categories.categories
      },
    },
    watch: {
      value_ (value: boolean) {
        this.initValues()
        if (!value) return
        categories.load()
        tags.load()
      },
    },
    mounted () {
      const {
        sortby, category,
      } = this.$route.query
      let {
        tags,
      } = this.$route.query
      if (tags && !Array.isArray(tags)) {
        tags = [
          tags,
        ]
      }
      if (sortby) this.selectedSorting = sortby as Sorting
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
        const newRoute = {
          name: this.$route.name,
        } as Location
        newRoute.query = {
        }
        if (this.selectedSorting) newRoute.query.sortby = this.selectedSorting
        if (this.selectedCategory) newRoute.query.category = this.selectedCategory
        if (this.selectedTags && this.selectedTags.length) newRoute.query.tags = this.selectedTags
        if (Object.keys(newRoute.query).length === 1 && newRoute.query.sortby === `desc`) delete newRoute.query
        this.$router.replace(newRoute)
          .catch(e => {})
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
        this.selectedTags = [
        ]
      },
    },
  })
</script>

<style lang="scss" scoped>
::v-deep .v-select.v-select--chips:not(.v-text-field--single-line).v-text-field--enclosed .v-select__selections {
  min-height: initial;
}
</style>
