<template>
  <div>
    <v-parallax
      v-if="project.images.length && project.images[0]"
      :src="project.images[0].url"
      height="400"
    >
      <v-row
        class="fill-height"
        style="background-color: #00000080;"
      />
    </v-parallax>
    <div
      v-else
      class="grey"
      style="height: 400px;"
    />
    <v-container
      style="position: relative; max-width: 840px;"
      class="pt-8"
    >
      <v-row
        style="position: absolute; width: 100%;"
        :style="`top: -${logoSize}px;`"
        align="end"
      >
        <v-col class="shrink">
          <v-avatar
            tile
            :size="logoSize"
            class="elevation-4 grey darken-2"
          >
            <v-img
              v-if="project.logo"
              :src="project.logo"
              eager
            />
            <v-icon
              v-else
              :size="logoSize / 1.5"
            >
              mdi-cube-outline
            </v-icon>
          </v-avatar>
        </v-col>
        <v-col class="mb-3">
          <div
            v-if="project.name"
            class="display-3"
          >
            {{ project.name }}
          </div>
          <v-skeleton-loader
            v-else
            type="heading"
            height="60"
            width="400"
            class="grey darken-4"
          />
        </v-col>
      </v-row>
      <v-card class="grey darken-4">
        <v-card-text>
          <v-row no-gutters>
            <v-col cols="6">
              <v-row
                align="center"
                dense
              >
                <v-col class="shrink">
                  Date
                </v-col>
                <v-spacer />
                <v-col class="shrink">
                  {{ project.date.getFullYear() }}
                </v-col>
              </v-row>
              <v-row
                align="center"
                dense
              >
                <v-col class="shrink">
                  Category
                </v-col>
                <v-spacer />
                <v-col class="shrink">
                  <v-chip>
                    {{ project.category }}
                  </v-chip>
                </v-col>
              </v-row>
              <v-row
                align="center"
                dense
              >
                <v-col class="shrink">
                  Tags
                </v-col>
                <v-spacer />
                <v-col class="shrink">
                  <v-row
                    no-gutters
                    class="flex-nowrap"
                  >
                    <v-icon
                      v-for="tag in project.tags"
                      :key="tag"
                      class="ml-1"
                    >
                      {{ `mdi-${tag}` }}
                    </v-icon>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-text>
          <v-container
            grid-list-xl
            class="pa-0"
          >
            <v-row
              v-if="project.images.length"
              dense
            >
              <v-col
                v-for="(media, i) in project.images"
                :key="media.url"
                class="shrink"
              >
                <v-img
                  v-if="media.type === `video`"
                  v-ripple
                  :src="`https://img.youtube.com/vi/${getVideoIdFromUrl(media.url)}/hqdefault.jpg`"
                  aspect-ratio="1"
                  width="128"
                  class="clickable"
                  @click="mediaViewerDialog = true; selectedMediaIndex = i;"
                >
                  <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                  >
                    <v-icon x-large>
                      mdi-play
                    </v-icon>
                  </v-row>
                </v-img>
                <v-img
                  v-else
                  v-ripple
                  :src="media.url"
                  aspect-ratio="1"
                  width="128"
                  class="clickable"
                  @click="mediaViewerDialog = true; selectedMediaIndex = i;"
                />
              </v-col>
            </v-row>
            <v-row
              v-else
              dense
            >
              <v-col
                v-for="n in 3"
                :key="`media-placeholder-${n}`"
                class="shrink"
              >
                <v-skeleton-loader
                  width="128"
                  height="128"
                  type="image"
                  tile
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-text>
          <div
            v-if="project.body"
            v-html="project.body"
          />
          <v-skeleton-loader
            v-else
            type="paragraph"
            class="mx-auto"
          />
        </v-card-text>
      </v-card>
    </v-container>
    <ImageViewerDialog
      v-model="mediaViewerDialog"
      :medias="project.images"
      :selected-index="selectedMediaIndex"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ImageViewerDialog from '@/components/Common/ImageViewerDialog.vue'
import { project } from '@/store/store'
import { getIdFromURL } from 'vue-youtube-embed'

export default Vue.extend({
  components: {
    ImageViewerDialog
  },

  data: () => ({
    mediaViewerDialog: false,
    selectedMediaIndex: 0
  }),

  computed: {
    project () {
      return project.project
    },
    logoSize (): number {
      return 144
    }
  },

  created () {
    this.loadProject()
  },

  beforeDestroy () {
    project.clear()
  },

  methods: {
    loadProject () {
      const { id } = this.$route.params
      project.load(id)
    },
    getVideoIdFromUrl (url: string) {
      return getIdFromURL(url)
    }
  }
})
</script>

<style scoped>
::v-deep .v-parallax__content {
  padding: 0;
}
</style>
