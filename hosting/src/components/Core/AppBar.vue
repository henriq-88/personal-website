<template>
  <v-app-bar
    v-scroll="updateLinkIndicator"
    color="#00000080"
    app
    fixed
    :height="72"
  >
    <v-row
      class="shrink"
      no-gutters
      align="center"
    >
      <v-expand-x-transition origin="right">
        <v-btn
          v-if="!isIndexPage"
          icon
          class="mr-2"
          @click="$router.go(-1)"
        >
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-expand-x-transition>
      <v-avatar color="grey-darken-3">
        <v-img :src="`/me.jpg`" />
      </v-avatar>
      <v-row
        class="flex-column ml-3"
        justify="center"
        no-gutters
      >
        <span class="body-1">Henrik Wassdahl</span>
        <span class="body-1 grey--text">UX Developer</span>
      </v-row>
    </v-row>
    <v-spacer />
    <v-app-bar-nav-icon
      v-if="$vuetify.breakpoint.xs"
      @click="value_ = !value_"
    />
    <v-tabs
      v-else
      v-model="linkIndex"
      background-color="transparent"
      class="shrink"
      style="width: inherit; margin-right: -8px;"
      color="white"
      optional
    >
      <v-tab
        v-for="link in links"
        :key="link.selector"
        class="white--text"
        style="opacity: inherit;"
        @click="goTo(link.selector)"
      >
        {{ link.text }}
      </v-tab>
    </v-tabs>
  </v-app-bar>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins'
import {
  GoToOptions,
} from 'vuetify/types/services/goto'
import {
  vModel,
} from '@/mixins'

export default mixins(vModel)
  .extend({
    data: () => ({
      linkIndex: 0 as number | null,
      linkIndicatorUpdateDisabled: false,
      headerPositions: [
      ] as any[],
    }),

    computed: {
      links: () => [
        {
          text: `Portfolio`,
          selector: `#portfolio`,
        },
        // {
        //   text: `About`,
        //   selector: `#about`,
        // },
        {
          text: `Contact`,
          selector: `#contact`,
        },
      ],
      isIndexPage (): boolean {
        return this.$route.name?.startsWith(`index`) || false
      },
    },

    watch: {
      '$route.name': {
        immediate: true,
        handler () {
          if (this.isIndexPage) {
            if (process.client) {
              this.updateLinkIndicator()
            }
            return
          }
          this.unsetLinkIndex()
        },
      },
      async linkIndex (index?: number | null, beforeIndex?: number | null) {
        if (!this.isIndexPage) return
        if (index !== undefined || beforeIndex === undefined) return
        await this.$nextTick()
        this.linkIndex = beforeIndex
      },
    },

    methods: {
      async goTo (selector: string | number) {
        if (!this.isIndexPage) {
          this.$router.push(`/`)
          await this.$sleep(100)
        }
        const duration = 300
        const options: GoToOptions = {
          duration,
          offset: 0,
          easing: `easeInOutCubic`,
        }
        this.linkIndicatorUpdateDisabled = true
        if (typeof selector === `number`) { this.linkIndex = 0 }
        this.$vuetify.goTo(selector, options)
        await new Promise(resolve => setTimeout(resolve, duration * 1.1))
        this.linkIndicatorUpdateDisabled = false
      },
      getHeaderPositions () {
        this.headerPositions = this.links.map(link => document.querySelector<HTMLElement>(link.selector)?.offsetTop)
      },
      async updateLinkIndicator (event?: Event) {
        await this.$sleep(100)
        if (this.linkIndicatorUpdateDisabled || !this.$route.name?.startsWith(`index`)) return
        this.linkIndicatorUpdateDisabled = true
        this.getHeaderPositions()
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop
        this.linkIndex = this.getLinkIndex(scrollPosition)
        this.linkIndicatorUpdateDisabled = false
      },
      getLinkIndex (scrollPosition: number): number {
        const scrolledToBottom = document.body.scrollHeight === scrollPosition + window.innerHeight
        if (scrollPosition === 0) return 0
        if (scrolledToBottom) return this.headerPositions.length - 1
        for (let i = this.headerPositions.length - 1; i > 0; i--) {
          if (scrollPosition >= (this.headerPositions[i] - window.innerHeight / 2)) return i
        }
        return 0
      },
      async unsetLinkIndex () {
        await this.$sleep(100)
        this.linkIndex = null
      },
    },
  })
</script>

<style scoped>
.v-toolbar.v-app-bar {
  backdrop-filter: blur(6px);
}
.v-application--is-ltr .v-toolbar__content > .v-btn.v-btn--icon:last-child {
  margin-right: 0;
}
::v-deep .v-toolbar__content {
  padding-right: 8px;
  padding-left: 8px;
}
</style>
