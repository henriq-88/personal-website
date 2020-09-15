<template>
  <div>
    <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      :color="type"
      top
    >
      <div>
        <span v-if="code">({{ code }}) </span>
        <span>{{ message }}</span>
      </div>
      <v-spacer />
      <v-btn
        :aria-label="`Close`"
        text
        @click="snackbar = false"
      >
        {{ $t(`common.close`) }}
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  TranslateResult,
} from 'vue-i18n'
import {
  SnackbarMessage,
} from '@/types'
import SnackbarModule from '@/store/snackbar'
import {
  getModule,
} from 'vuex-module-decorators'

export default Vue.extend({
  data: () => ({
    snackbar: false,
    timeout: 6000,
    queue: [
    ] as SnackbarMessage[],
    currentMessage: null as SnackbarMessage | null,
    message: null as TranslateResult | null,
    type: null as string | null,
    code: null as string | number | null,
  }),

  computed: {
    messages (): SnackbarMessage[] {
      const snackbar = getModule(SnackbarModule, this.$store)
      return snackbar.messageQueue
    },
  },

  watch: {
    async snackbar (snackbar: boolean) {
      if (snackbar && this.currentMessage) return
      this.resetMessage()
      if (!this.queue || this.queue.length === 0) return
      this.loadMessage()
      await this.$sleep(100)
      this.snackbar = true
    },
    messages (messages: SnackbarMessage[]) {
      if (!messages || messages.length === 0) return
      messages.forEach(message => {
        this.queue.push(message)
      })
      const snackbar = getModule(SnackbarModule, this.$store)
      snackbar.removeSiteMessage()
    },
    queue: {
      deep: true,
      handler (queue: SnackbarMessage[]) {
        if (!queue || queue.length === 0) return
        if (this.snackbar) return
        if (this.currentMessage) return
        this.snackbar = true
      },
    },
  },

  methods: {
    loadMessage () {
      const current = this.queue.shift() || null
      this.currentMessage = current
      if (current) {
        ({
          type: this.type, code: this.code,
        } = current)
        this.message = current.snackMessage || current.message
        this.timeout = current.timeout || 6000
      } else {
        this.resetMessage()
      }
    },
    resetMessage () {
      this.message = null
      this.type = null
      this.code = null
      this.timeout = 6000
      this.currentMessage = null
    },
  },
})
</script>
