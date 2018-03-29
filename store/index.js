import Vue from 'vue'
import Vuex from 'vuex'

import User from './user'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    modules: {
      User
    }
  })
}

export default createStore