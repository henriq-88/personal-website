<template>
  <v-card>
    <v-card-text v-if="loading">
      <v-layout row>
        <v-spacer/>
        <v-progress-circular
          indeterminate
          color="primary"/>
        <v-spacer/>
      </v-layout>
    </v-card-text>
    <v-card-text v-else>
      <v-text-field
        v-if="edit"
        textarea
        rows="20"
        v-model="text"/>
      <div
        v-else
        v-html="text"/>
      <p>Your's sincerely,</p>
      <p class="signature">{{ author }}</p>
    </v-card-text>
    <v-card-actions v-if="isSignedIn && !loading">
      <v-spacer/>
      <v-btn
        v-if="edit"
        color="accent" flat
        @click="saveAbout">
        Save
      </v-btn>
      <v-btn
        v-else
        color="accent" flat
        @click="edit = true">
        Edit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import * as firebase from 'firebase'

import Head from '@/components/Mixins/Head'

export default {
  mixins: [Head],
  data: () => ({
    text: null,
    loading: false,
    author: process.env.AUTHOR,
    edit: false
  }),
  mounted () {
    this.getAbout()
  },
  methods: {
    getDataFromApi () {
      return firebase.firestore().doc('about/1').get()
    },
    async getAbout () {
      this.loading = true
      try {
        const about = await this.getDataFromApi()
        const { text } = about.data()
        this.text = text
      } catch (err) {
        console.error(err)
      }
      this.loading = false
    },
    postDataToApi () {
      return firebase.firestore().doc('about/1').set({ text: this.text })
    },
    async saveAbout () {
      this.loading = true
      try {
        await Promise.all([this.postDataToApi(), this.getAbout()])
        this.edit = false
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
  }
}
</script>

<style lang="scss" scoped>
  .signature {
    font-family: 'Great Vibes', cursive;
    font-size: 48pt;
  }
</style>

