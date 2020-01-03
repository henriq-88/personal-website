<template>
  <v-hover #default="{ hover }">
    <v-card
      color="white"
      dark
      :height="256"
      tile
      :to="`/${project.id}`"
    >
      <v-img
        :src="project.images[0] ? project.images[0].url : ``"
        height="100%"
        :class="{ grayscale: !hover }"
        class="transition grey darken-4"
      >
        <!-- eslint-disable-next-line no-irregular-whitespace -->
        <v-slide-y-transition​>
          <v-row
            v-if="hover"
            class="transition-fast-in-fast-out darken-2 v-card--reveal flex-column"
            no-gutters
            align="start"
            justify="start"
          >
            <v-row
              class="top pa-3 shrink"
              style="width: 100%;"
              no-gutters
              align="center"
            >
              <v-col class="shrink">
                <v-avatar
                  tile
                  color="grey darken-2"
                  class="elevation-4"
                >
                  <v-img
                    v-if="project.logo"
                    :src="project.logo"
                    eager
                  />
                  <v-icon v-else>
                    mdi-cube-outline
                  </v-icon>
                </v-avatar>
              </v-col>
              <v-col class="ml-3 title text-truncate">
                {{ project.name }}
              </v-col>
            </v-row>
          </v-row>
          <!-- eslint-disable-next-line no-irregular-whitespace -->
        </v-slide-y-transition​>
        <!-- eslint-disable-next-line no-irregular-whitespace -->
        <v-slide-y-reverse-transition​>
          <v-row
            v-if="hover"
            class="transition-fast-in-fast-out darken-2 v-card--reveal flex-column"
            no-gutters
            justify="end"
          >
            <v-card-actions
              class="bottom"
              style="width: 100%;"
            >
              {{ project.tags }}
              <v-spacer />
              <v-chip x-small>
                {{ project.category }}
              </v-chip>
            </v-card-actions>
          </v-row>
          <!-- eslint-disable-next-line no-irregular-whitespace -->
        </v-slide-y-reverse-transition​>
      </v-img>
    </v-card>
  </v-hover>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    project: {
      type: Object,
      required: true
    }
  }
})
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
}
.top {
  background: linear-gradient(rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%);
}
.bottom {
  background: linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 100%);
}
.grayscale {
  filter: grayscale(100%);
}
</style>
