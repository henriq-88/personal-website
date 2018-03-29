<template>
  <v-footer
    app
    absolute
    class="half-transparent">
    <v-layout row class="grey--text">
      <v-spacer/>
      &copy; Henrik Wassdahl {{ new Date().getFullYear() }}
      <v-spacer/>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
  .half-transparent {
    background:rgba(0, 0, 0, 0.712);
  }
</style>
