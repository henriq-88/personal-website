<template>
  <v-container>
    <v-card>
      <v-card-title>
        <span class="headline">Admin Sign In</span>
      </v-card-title>
      <v-card-text>
        <v-btn
          v-for="(item, i) in items" :key="i"
          block
          large
          :color="item.color" dark
          @click="signIn(item.name)">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.name }}
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import Head from '@/components/Mixins/Head'

export default {
  mixins: [Head],
  data: () => ({
    items: [
      { name: 'Facebook', color: 'indigo', icon: 'mdi-facebook' },
      { name: 'Google', color: 'red', icon: 'mdi-google' },
    ]
  }),
  methods: {
    async signIn (providerName) {
      try {
        await this.$store.dispatch('signInWithProvider', { providerName })
        this.$router.push('/')
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>