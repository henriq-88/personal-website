<template>
  <v-dialog
    v-model="imageGallaryDialog"
    class="pa-0"
    max-width="800px"
    :width="width">
    <v-card>
      <v-card-text class="pa-0">
        <v-layout row>
          <v-spacer/>
          <img
            id="currentImage"
            class="image"
            v-if="images && images.length > 0 && imageIndex !== null"
            :src="images[imageIndex].url">
          <v-spacer/>
        </v-layout>
        <v-btn
          class="mt-5"
          fab
          small
          absolute
          top right
          @click="imageGallaryDialog = false">
          <v-icon>close</v-icon>
        </v-btn>
        <div>
          <v-btn
            v-if="images && images.length >= 2"
            class="mb-5"
            color="accent"
            fab
            small
            bottom left
            absolute
            @click="previousImage">
            <v-icon>keyboard_arrow_left</v-icon>
          </v-btn>
          <v-btn
            v-if="images && images.length >= 2"
            class="mb-5"
            color="accent"
            fab
            small
            absolute
            bottom right
            @click="nextImage">
            <v-icon>keyboard_arrow_right</v-icon>
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['dialog', 'images', 'index'],
  data: () => ({
    imageGallaryDialog: false,
    width: null,
    height: null,
    imageIndex: null,
    image: 'https://vuetifyjs.com/static/doc-images/ads/store-ad-1.png'
  }),
  methods: {
    async updateWidth () {
      // to handle image loading
      await new Promise(resolve => setTimeout(resolve, 0))

      const image = document.querySelector('#currentImage')
      if (!image) return
      this.width = image.naturalWidth
      this.height = image.naturalHeight
    },
    nextImage () {
      if (this.imageIndex === null || !this.images) {
        this.imageIndex = 0
        return
      }
      this.imageIndex++
      this.imageIndex %= this.images.length
    },
    previousImage () {
      if (this.imageIndex === null || !this.images) {
        this.imageIndex = 0
        return
      }
      this.imageIndex--
      if (this.imageIndex < 0) this.imageIndex += this.images.length
      this.imageIndex %= this.images.length
    }
  },
  watch: {
    dialog (dialog) {
      this.imageGallaryDialog = dialog
    },
    imageGallaryDialog (imageGallaryDialog) {
      this.$emit('update:dialog', imageGallaryDialog)
    },
    index (index) {
      this.imageIndex = index
    },
    imageIndex (imageIndex) {
      this.gallaryImageIndex = imageIndex
      this.updateWidth()
      this.$emit('update:index', imageIndex)
    },
  }
}
</script>

<style lang="scss" scoped>
  .image {
    object-fit: contain;
    max-width: 100%;
  }
</style>
