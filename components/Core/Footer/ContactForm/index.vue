<template>
  <v-layout column>
    <v-flex>
      <v-form v-model="valid" ref="form">
        <v-text-field
          v-model="name"
          label="Name"
          color="accent"
          :rules="[$globals.rules.required]"
          :disabled="loading"
          hide-details
          required/>
        <v-text-field
          v-model="organization"
          :disabled="loading"
          label="Organization"
          color="accent"
          hide-details/>
        <v-text-field
          v-model="email"
          :disabled="loading"
          label="Email"
          color="accent"
          :rules="[$globals.rules.required, $globals.rules.email]"
          hide-details
          required/>
        <v-text-field
          v-model="message"
          :disabled="loading"
          label="Message"
          color="accent"
          rows="2"
          :rules="[$globals.rules.required]"
          multi-line
          hide-details
          required/>
        <v-btn
          block
          color="accent"
          :disabled="!valid"
          :loading="loading"
          @click="sendMessage">
          Send
        </v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import * as firebase from 'firebase'

export default {
  data: () => ({
    valid: false,
    loading: false,
    name: null,
    organization: null,
    email: null,
    message: null
  }),
  methods: {
    async sendMessage () {
      this.loading = true
      try {
        await this.postMessage()
        this.$refs.form.reset()
      } catch (err) {
        console.error(err)
      }
      this.loading = false
    },
    postMessage () {
      return firebase.firestore().collection('messages').add({
        name: this.name,
        organization: this.organization,
        email: this.email,
        message: this.message
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
