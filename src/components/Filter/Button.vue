<template>
  <v-btn
    fixed
    fab
    light
    style="bottom: 12px; right: 12px;"
    @click="filterDialog = true"
  >
    <v-icon>mdi-filter</v-icon>
    <FilterDialog v-model="filterDialog" />
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
import FilterDialog from '@/components/Filter/Dialog.vue'

export default Vue.extend({
  components: {
    FilterDialog
  },
  data: () => ({
    filterDialog: false
  })
})
</script>
