import Vue from 'vue'

const globals = Object.freeze({
  category: {
    model: {
      name: 'Model',
      color: 'red'
    },
    app: {
      name: 'App',
      color: 'orange'
    },
    web: {
      name: 'Web',
      color: 'blue'
    },
    game: {
      name: 'Game',
      color: 'green'
    }
  },

  tags: {
    vue: {
      name: 'Vue',
      icon: 'mdi-vuejs'
    },
    angular: {
      name: 'Angular',
      icon: 'mdi-angular'
    },
    firebase: {
      name: 'Firebase',
      icon: 'whatshot'
    },
    android: {
      name: 'Android',
      icon: 'android'
    },
    video: {
      name: 'Video',
      icon: 'videocam'
    }
  },
  
  config: {
    MAX_PROJECT_IMAGE_COUNT: 3
  },

  rules: {
    email: (value) => {
      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Invalid e-mail.'
    },
    required: (value) => {
      const valid = !Array.isArray(value) ? !!value : value.length > 0
      return valid || 'Required.'
    }
  }
})

Vue.prototype.$globals = globals
