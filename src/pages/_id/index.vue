<template>
  <div>
    <v-parallax
      v-if="project.banner"
      :src="project.banner"
      height="400"
    >
      <v-row
        class="fill-height"
        style="background-color: #00000080;"
        justify="center"
        no-gutters
      >
        <v-row
          class="fill-height px-3"
          align="end"
          :justify="$vuetify.breakpoint.xs ? `end` : `start`"
          style="max-width: 840px;"
          :class="{ 'flex-column': $vuetify.breakpoint.xs }"
        >
          <v-col class="shrink">
            <v-avatar
              tile
              :size="logoSize"
              :class="{
                'elevation-4': !project.logo,
                grey: !project.logo,
                'darken-2': !project.logo
              }"
            >
              <v-img
                v-if="project.logo"
                :src="project.logo"
                eager
                contain
              />
              <v-icon
                v-else
                :size="logoSize / 1.5"
              >
                mdi-cube-outline
              </v-icon>
            </v-avatar>
          </v-col>
          <v-col :class="{ shrink: $vuetify.breakpoint.xs }">
            <div
              v-if="project.name"
              class="pr-3"
              :class="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? `display-1` : `display-3`"
            >
              {{ project.name }}
            </div>
            <v-skeleton-loader
              v-else
              tile
              type="heading"
              :height="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? 40 : 60"
              :width="($vuetify.breakpoint.xs || $vuetify.breakpoint.sm) ? 200 : 400"
            />
          </v-col>
        </v-row>
      </v-row>
    </v-parallax>
    <div
      v-else
      class="grey darken-4"
      style="height: 400px;"
    />
    <v-container
      style="position: relative; max-width: 840px;"
      class="pt-8"
    >
      <v-card class="grey darken-4">
        <v-card-text>
          <v-row no-gutters>
            <v-col cols="7">
              <v-row
                align="center"
                dense
              >
                <v-col
                  class="shrink"
                  cols="12"
                >
                  {{ $t(`common.date`) }}
                </v-col>
                <v-spacer />
                <v-col
                  class="shrink"
                  cols="12"
                >
                  <span
                    v-if="project.date"
                    class="white--text"
                  >{{ project.date.getFullYear() }}</span>
                  <v-skeleton-loader
                    v-else
                    tile
                    type="text"
                    width="40"
                    height="22"
                  />
                </v-col>
              </v-row>
              <v-row
                align="center"
                dense
              >
                <v-col
                  class="shrink"
                  cols="12"
                >
                  {{ $t(`common.category`) }}
                </v-col>
                <v-spacer />
                <v-col
                  class="shrink"
                  cols="12"
                >
                  <v-chip
                    v-if="project.category"
                    small
                  >
                    {{ $t(`projectCategories.${project.category}`) }}
                  </v-chip>
                  <v-skeleton-loader
                    v-else
                    type="chip"
                    height="24"
                    width="64"
                  />
                </v-col>
              </v-row>
              <v-row
                align="center"
                dense
              >
                <v-col
                  class="shrink"
                  cols="12"
                >
                  {{ $t(`common.tags`) }}
                </v-col>
                <v-spacer />
                <v-col
                  class="shrink"
                  cols="12"
                >
                  <v-row
                    v-if="project.tags.length"
                    no-gutters
                    class="flex-nowrap"
                  >
                    <template v-for="tag in project.tags">
                      <v-tooltip
                        v-if="$global.tagIcons[tag]"
                        :key="tag"
                        bottom
                      >
                        <template #activator="{ on }">
                          <v-icon
                            class="ml-1"
                            dense
                            v-on="on"
                          >
                            {{ $global.tagIcons[tag] }}
                          </v-icon>
                        </template>
                        <span>#{{ tag }}</span>
                      </v-tooltip>
                      <span
                        v-else
                        :key="tag"
                        class="white--text mr-1"
                      >
                        #{{ tag }}
                      </span>
                    </template>
                  </v-row>
                  <v-row
                    v-else
                    no-gutters
                    class="flex-nowrap"
                  >
                    <v-skeleton-loader
                      v-for="n in 3"
                      :key="`placeholder-icon-${n}`"
                      type="avatar"
                      height="20"
                      width="20"
                      class="ml-1"
                    />
                  </v-row>
                </v-col>
              </v-row>
              <v-row
                align="center"
                dense
              >
                <v-col
                  class="shrink"
                  cols="12"
                >
                  {{ $t(`common.website`) }}
                </v-col>
                <v-spacer />
                <v-skeleton-loader
                  v-if="project.website === ``"
                  tile
                  type="text"
                  height="22"
                  width="128"
                />
                <v-col
                  v-else
                  class="shrink"
                  cols="12"
                >
                  <a
                    v-if="project.website"
                    :href="project.website"
                    target="_blank"
                    class="text-no-wrap"
                  >
                    {{ project.website }}
                  </a>
                  <span v-else>-</span>
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
              v-if="project.medias.length"
              dense
            >
              <v-col
                v-for="(media, i) in project.medias"
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
                  v-else-if="media.type === `image`"
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
      :medias="project.medias"
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
    getVideoIdFromUrl (url: string): string {
      return getIdFromURL(url)
    }
  }
})
</script>

<style scoped>
::v-deep .v-parallax__content {
  padding: 0;
}
::v-deep .v-parallax__image-container {
  filter: blur(2px);
}
::v-deep .v-skeleton-loader__bone {
  height: inherit;
  width: inherit;
}
</style>
