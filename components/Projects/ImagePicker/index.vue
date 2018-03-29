<template>
  <v-flex md4 sm6 xs12>
    <input
      required
      type="file"
      ref="imageInput"
      accept="image/x-png,image/jpeg"
      @change="uploadImage($event.target.files[0])"
      style="display:none"/>
    <v-card>
      <v-card-media
        @click="selectImage"
        class="grey white--text clickable"
        height="266px"
        :src="imageUrl">
        <v-container fill-height fluid>
          <v-layout row wrap align-center>
            <v-flex
              v-if="imageUploading"
              class="text-xs-center">
              <v-progress-circular
                :size="100"
                :width="15"
                :rotate="-90"
                :value="imageUploadProgress"
                color="white">
                <span class="text-shadow">{{ imageUploadProgress }}%</span>
              </v-progress-circular>
            </v-flex>
            <v-flex
              v-else-if="!imageUrl"
              class="text-xs-center">
              <span class="project-title text-shadow headline">
                <div>Upload Image</div>
                <v-icon x-large color="white">add</v-icon>
              </span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-media>
    </v-card>
    <v-text-field
      @click="selectImage"
      :value="imageFileName"
      label="Image"
      readonly/>
  </v-flex>
</template>

<script>
import * as firebase from 'firebase'

export default {
  props: ['index', 'projectId', 'image'],
  data: () => ({
    imageUrl: null,
    imageUploading: false,
    imageUploadProgress: 0,
    imageFileName: null
  }),
  methods: {
    selectImage () {
			if (this.imageUploading) return
			this.$refs.imageInput.click()
    },
    async uploadImage (file) {
      this.imageUploading = true
      try {
        this.imageFileName = file.name
        this.imageUrl = await this.uploadProjectImage(file)
        const image = { url: this.imageUrl, name: this.imageFileName }
        this.$emit('imageUploaded', { index: this.index, image })
      } catch (err) {
        console.error(err)
      }
      this.imageUploading = false
    },
    uploadProjectImage (file) {
      if (!file) return
      const uploadTask = firebase.storage().ref(`projects/${this.projectId}/${file.name}`).put(file)

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, snapshot => {
        this.imageUploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
      })

      return uploadTask.then((onFulfilled, onRejected) => { return onFulfilled.downloadURL })
    }
  },
  watch: {
    image (image) {
      if (!image) return
      this.imageUrl = image.url
      this.imageFileName = image.name
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
