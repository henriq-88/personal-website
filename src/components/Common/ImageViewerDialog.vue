<template>
  <v-overlay
    :value="value_"
    opacity="0.75"
  >
    <KeyPress
      :key-code="27"
      event="keyup"
      @pressed="value_ = false"
    /><!-- escape -->
    <KeyPress
      :key-code="37"
      event="keyup"
      @pressed="prev"
    /><!-- left -->
    <KeyPress
      :key-code="39"
      event="keyup"
      @pressed="next"
    /><!-- right -->
    <v-row
      v-if="medias.length > 1"
      class="fill-width fill-height"
      no-gutters
      style="position: fixed; top: 0; left: 0; right: 0; bottom: 0;"
    >
      <v-col>
        <v-row
          justify="start"
          align="center"
          no-gutters
          class="fill-height clickable"
          @click="prev"
          @keyup.left="next"
        >
          <v-btn
            icon
            x-large
            class="ma-4"
          >
            <v-icon size="64">
              mdi-chevron-left
            </v-icon>
          </v-btn>
        </v-row>
      </v-col>
      <v-col>
        <v-row
          justify="end"
          align="center"
          no-gutters
          class="fill-height clickable"
          @click="next"
          @keyup.right="next"
        >
          <v-btn
            icon
            x-large
            class="ma-4"
          >
            <v-icon size="64">
              mdi-chevron-right
            </v-icon>
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-row
      class="fill-height"
      justify="center"
      align="center"
    >
      <v-responsive
        v-if="medias.length && medias[index].type === `video`"
        :aspect-ratio="930/523"
        style="position: fixed;"
        width="90%"
      >
        <iframe
          :src="`https://www.youtube.com/embed/${getVideoIdFromUrl(medias[index].url)}`"
          frameborder="0"
          allow="encrypted-media"
          allowfullscreen
          width="100%"
          height="100%"
        />
      </v-responsive>
      <v-img
        v-else-if="medias.length"
        :src="medias[index].url"
        max-height="90%"
        max-width="90%"
        contain
        style="position: fixed;"
      />
    </v-row>
    <v-btn
      fixed
      top
      right
      icon
      @click="value_ = false"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-overlay>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins'
import { vModel } from '@/mixins'
import KeyPress from 'vue-keypress'
import { getIdFromURL } from 'vue-youtube-embed'

export default mixins(vModel).extend({
  components: {
    KeyPress
  },

  props: {
    medias: {
      type: Array,
      default: () => []
    },
    selectedIndex: {
      type: Number,
      default: 0
    }
  },

  data: () => ({
    index: 0
  }),

  watch: {
    value: {
      immediate: true,
      handler (value: boolean) {
        this.index = this.selectedIndex
      }
    }
  },

  methods: {
    next () {
      this.index = (this.index + 1) % this.medias.length
    },
    prev () {
      this.index--
      if (this.index < 0) this.index = this.medias.length - 1
    },
    getVideoIdFromUrl (url: string) {
      return getIdFromURL(url)
    }
  }
})
</script>

<style scoped>
::v-deep .v-dialog {
  box-shadow: none;
}
::v-deep .v-overlay__content {
  width: 100%;
}
::v-deep .v-responsive__sizer {
  transition: none;
}
</style>
