<template>
  <v-container>
    <v-card>
      <v-card-text>
        <div
          v-if="videoId"
          class="video-container mb-3">
          <iframe
            :src="`https://www.youtube.com/embed/${videoId}`"
            frameborder="0"
            allow="encrypted-media"
            allowfullscreen/>
        </div>
        <v-container
          v-if="images"
          class="mb-3"
          grid-list-md>
          <v-layout
            row wrap>
            <v-flex
              v-for="(image, i) in images" :key="i"
              xs12 sm2>
              <v-card
                class="clickable"
                @click.native="openDialog(i)">
                <v-card-media
                  class="grey"
                  height="116px"
                  :src="image.url">
                </v-card-media>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
        <div class="headline">{{ name }}</div>
        <div v-if="website">
          <a :href="website" target="_blank">
            {{ website }}
            <v-icon small>open_in_new</v-icon>
          </a>
        </div>
        <div
          class="mt-3"
          v-html="body"/>
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          v-if="isSignedIn"
          color="accent"
          flat
          :loading="loading"
          @click="removeProject">
          Remove
        </v-btn>
        <v-btn
          v-if="isSignedIn"
          color="accent"
          flat
          :loading="loading"
          to="edit"
          append>
          Edit
        </v-btn>
      </v-card-actions>
    </v-card>
    <ImageGallaryDialog
      :images="images"
      :index.sync="gallaryImageIndex"
      :dialog.sync="gallaryDialog"/>
  </v-container>
</template>

<script>
import * as firebase from 'firebase'
import { getIdFromURL } from 'vue-youtube-embed'

import ImageGallaryDialog from '@/components/Projects/ImageGallaryDialog'

export default {
  components: {
    ImageGallaryDialog
  },
  data: () => ({
    loading: false,
    gallaryDialog: false,
    gallaryImageIndex: null,
    name: null,
    category: null,
    date: null,
    body: null,
    images: null,
    tags: null,
    videoId: null,
    website: null
  }),
  mounted () {
    this.reloadProject()
  },
  methods: {
    openDialog (index) {
      this.gallaryImageIndex = index
      this.gallaryDialog = true
    },
    async reloadProject () {
      this.loading = true
      try {
        const { name, category, tags, date, body, images, video, website } = await this.getProject()

        this.name = name
        this.category = category
        this.date = date
        this.body = body
        this.images = images
        this.tags = tags
        if (video) this.videoId = getIdFromURL(video)
        this.website = website
      } catch (err) {
        console.error(err)
      }
      this.loading = false
    },
    async getProject () {
      const ref = firebase.firestore().doc(`projects/${this.$route.params.id}`)
      const snapshot = await ref.get()
      return snapshot.data()
    },
    async removeProject () {
      if (!confirm(`Are you sure you want to delete the project\n"${this.name}"?`)) return
      this.loading = true
      try {
        await this.deleteProject()
        this.$router.go(-1)
      } catch (err) {

      }
      this.loading = false
    },
    async deleteProject () {
      const ref = firebase.firestore().doc(`projects/${this.$route.params.id}`)
      return ref.delete()
    }
  },
  computed: {
    isSignedIn () {
      return this.$store.getters.isSignedIn
    }
  }
}
</script>

<style lang="scss" scoped>
  .video-container {
    position: relative;
    padding-bottom: 56%;
  }

  .video-container iframe {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
