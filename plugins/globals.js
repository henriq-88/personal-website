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
    },
    package: {
      name: 'Package',
      color: 'grey'
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
    },
    npm: {
      name: 'Node Package Manager',
      icon: 'mdi-npm'
    }
  },
  
  config: {
    MAX_PROJECT_IMAGE_COUNT: 3
  },

  rules: {
    email: (value) => {
      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || 'Invalid e-mail.'
    },
    required: (value) => {
      const valid = !Array.isArray(value) ? !!value : value.length > 0
      return valid || 'Required.'
    },
    link: (value) => {
      return /^https?:\/\/[^\s/$.?#].[^\s]*$/.test(value) || 'Invalid link.'
    }
  }
})

Vue.prototype.$globals = globals
