<template>
  <div>Signing out...</div>
</template>

<script>
import store from '@/store'
import Head from '@/components/Mixins/Head'

export default {
  mixins: [Head],
  async fetch ({ from, redirect }) {
    await store().dispatch('signOut')
    redirect(301, from.path)
  }
}
</script>

<style lang="scss" scoped>
</style>
