<template>
  <v-navigation-drawer
    v-model="value_"
    color="black"
    right
    fixed
    dark
  >
    <v-list>
      <v-list-item
        v-for="link in links"
        :key="link.text"
        link
        @click="goTo(link.selector)"
      >
        <v-list-item-content>
          <v-list-item-title class="text-uppercase">
            {{ link.text }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import mixins from 'vue-typed-mixins'
import { GoToOptions } from 'vuetify/types/services/goto'
import { vModel } from '@/mixins'

export default mixins(vModel).extend({
  computed: {
    links (): any[] {
      return [
        { text: `Portfolio`, selector: `#portfolio` },
        { text: `About`, selector: `#about` },
        { text: `Contact`, selector: `#contact` }
      ]
    },
    isIndexPage (): boolean {
      return this.$route.name?.startsWith(`index`) || false
    }
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
        easing: `easeInOutCubic`
      }
      this.$vuetify.goTo(selector, options)
      this.value_ = false
    }
  }
})
</script>
