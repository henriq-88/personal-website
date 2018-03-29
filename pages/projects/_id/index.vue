<template>
  <v-container>
    <v-card>
      <v-card-title>
        <span class="headline">{{ name }}</span>
      </v-card-title>
      <v-card-text>

      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          v-if="isSignedIn"
          flat
          to="edit"
          append>
          Edit
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import * as firebase from 'firebase'

export default {
  data: () => ({
    loading: false,
    name: null,
    category: null,
    date: null,
    images: null,
    tags: null
  }),
  mounted () {
    this.reloadProject()
  },
  methods: {
    async reloadProject () {
      this.loading = true
      try {
        const { name, category, date, images, tags } = await this.getProject()
        this.name = name
        this.category = category
        this.date = date
        this.images = images
        this.tags = tags
      } catch (err) {

      }
      this.loading = false
    },
    async getProject () {
      const ref = firebase.firestore().doc(`projects/${this.$route.params.id}`)
      const snapshot = await ref.get()
      return snapshot.data()
    }
  },
  computed: {
    isSignedIn () {
      return this.$store.getters.isSignedIn
    }
  }
}
</script>