<template>
  <v-footer
    app
    absolute
    dark
    height="auto">
    <v-container
      fluid
      class="black white--text">
      <v-layout row>
        <v-flex
          xs12
          sm10 offset-sm1
          md8 offset-md2
          lg6 offset-lg3>
          <v-layout row class="my-2">
            <v-spacer/>
            <v-btn
              v-for="(social, i) in socials" :key="i"
              :color="social.color"
              :href="social.href"
              flat fab small
              target="_blank">
              <v-icon>{{ social.icon }}</v-icon>
            </v-btn>
            <v-spacer/>
          </v-layout>
          <v-layout row class="mt-2">
            <v-spacer/>
            <span class="title">Let's make magic together!</span>
            <v-spacer/>
          </v-layout>
          <v-layout row class="mb-2">
            <v-spacer/>
            <ContactForm/>
            <v-spacer/>
          </v-layout>
          <v-layout
            row
            class="grey--text mt-4 mb-2">
            <v-spacer/>
            Copyright &copy; {{ new Date().getFullYear() }} Henrik Wassdahl
            <v-spacer/>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
  </v-footer>
</template>

<script>
import ContactForm from '@/components/Core/Footer/ContactForm'

export default {
  components: {
    ContactForm
  },
  data: () => ({
    socials: [
      { href: 'https://www.facebook.com/henrik.wassdahl', icon: 'mdi-facebook', color: 'indigo' },
      { href: 'https://plus.google.com/+HenrikWassdahl', icon: 'mdi-google', color: 'red' },
      { href: 'https://github.com/seline', icon: 'mdi-github-circle', color: 'grey' },
      { href: 'https://bitbucket.org/Seline88', icon: 'mdi-bitbucket', color: 'blue' },
      { href: 'https://www.linkedin.com/in/henrikwassdahl', icon: 'mdi-linkedin', color: 'light-blue' },
      { href: 'https://stackoverflow.com/users/2375978/henrik-wassdahl', icon: 'mdi-stack-overflow', color: 'orange' },
    ]
  })
}
</script>

<style lang="scss" scoped>
  .half-transparent {
    background:rgba(0, 0, 0, 0.712);
  }
</style>
