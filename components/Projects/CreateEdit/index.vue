<template>
  <v-container>
    <v-card>
      <v-card-title>
        <span
          v-if="!$route.params.id"
          class="headline">
          Create New Project
        </span>
        <span
          v-else
          class="headline">
          Edit Project
        </span>
      </v-card-title>
      <v-card-text>
        <v-form
          v-model="valid"
          ref="form">
          <v-text-field
            v-model="name"
            label="Name"
            :rules="[$globals.rules.required]"
            required/>
          <v-select
            v-model="categorySelect"
            label="Category"
            :rules="[$globals.rules.required]"
            :items="categories"
            required/>
          <v-select
            v-model="tagSelect"
            label="Tags"
            :rules="[$globals.rules.required]"
            :items="tags"
            chips
            multiple
            required/>
          <v-menu
            ref="dateMenu"
            lazy
            :close-on-content-click="false"
            v-model="dateMenu"
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
            :return-value.sync="date">
            <v-text-field
              slot="activator"
              v-model="date"
              label="Date"
              :rules="[$globals.rules.required]"
              readonly
              required/>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="dateMenu = false">Cancel</v-btn>
              <v-btn flat color="primary" @click="$refs.dateMenu.save(date)">OK</v-btn>
            </v-date-picker>
          </v-menu>
          <v-text-field
            v-model="body"
            label="Body"
            textarea
            :rules="[$globals.rules.required]"
            required/>
          <v-container grid-list-md>
            <v-layout row wrap>
              <ProjectImagePicker
                v-for="i in $globals.config.MAX_PROJECT_IMAGE_COUNT" :key="i"
                :index="i-1"
                :projectId="projectId"
                :image="images ? images[i-1] : null"
                @imageUploaded="addImage"/>
            </v-layout>
          </v-container>
          <v-text-field
            v-model="video"
            label="Video link"/>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          v-if="!$route.params.id"
          :loading="loading"
          flat
          @click="resetForm">
          Reset
        </v-btn>
        <v-btn
          v-if="!$route.params.id"
          :disabled="!valid"
          :loading="loading"
          flat
          @click="createUpdateProject">
          Create
        </v-btn>
        <v-btn
          v-else
          :disabled="!valid"
          :loading="loading"
          flat
          @click="createUpdateProject">
          Update
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import * as firebase from 'firebase'

import Head from '@/components/Mixins/Head'

import ProjectImagePicker from '@/components/Projects/ImagePicker'

export default {
  mixins: [Head],
  components: {
    ProjectImagePicker
  },
  data: () => ({
    loading: false,
    valid: false,
    name: null,
    categorySelect: null,
    categories: [],
    categoriesLoading: false,
    tagSelect: null,
    tags: [],
    tagsLoading: false,
    date: null,
    dateMenu: false,
    body: null,
    images: null,
    video: null
  }),
  mounted () {
    this.reloadCategories()
    this.reloadTags()
    if (this.$route.params.id) this.reloadProject()
  },
  methods: {
    async reloadProject () {
      this.loading = true
      try {
        const { name, category, tags, date, body, images, video } = await this.getProject()
        
        this.name = name
        this.categorySelect = category
        this.tagSelect = tags
        this.date = `${('0000' + date.getFullYear()).slice(-4)}-${('00' + (date.getMonth() + 1)).slice(-2)}-${('00' + date.getDate()).slice(-2)}`
        this.body = body
        this.images = images
        this.video = video
      } catch (err) {

      }
      this.loading = false
    },
    async getProject () {
      const ref = firebase.firestore().doc(`projects/${this.$route.params.id}`)
      const snapshot = await ref.get()
      return snapshot.data()
    },
    async createUpdateProject () {
      this.loading = true
      try {
        await this.setProject()
        this.$router.go(-1)
      } catch (err) {

      }
      this.loading = false
    },
    setProject () {
      const projectId = this.$route.params.id || this.$options.filters.linkText(this.name)
      console.log(projectId)
      return firebase.firestore().doc(`projects/${projectId}`).set({
        name: this.name,
        category: this.categorySelect,
        tags: this.tagSelect,
        date: new Date(this.date),
        body: this.body,
        images: this.images,
        video: this.video
      })
    },
    async reloadCategories () {
      this.categoriesLoading = true
      try {
        this.categories = await this.getCategories()
      } catch (err) {
        console.error(err)
      }
      this.categoriesLoading = false
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
    async reloadTags () {
      this.tagsLoading = true
      try {
        this.tags = await this.getTags()
      } catch (err) {
        console.error(err)
      }
      this.tagsLoading = false
    },
    async getTags () {
      const ref = firebase.firestore().collection('tags')
      const tags = []
      const snapshots = await ref.get()
      snapshots.forEach(async snapshot => {
        const { id, name } = snapshot.data()
        const tag = { text: name, value: snapshot.id }
        tags.push(tag)
      })
      return tags
    },
    addImage ({ index, image }) {
      if (!this.images) this.images = []
      this.images[index] = image
      this.images = this.images.filter(image => !!image)
    },
    resetForm () {
      this.$refs.form.reset()
    }
  },
  computed: {
    projectId () {
      if (!this.name) return
      return this.$options.filters.linkText(this.name)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
