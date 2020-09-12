import * as firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/performance'
import {
  Context,
} from '@nuxt/types'
import {
  Inject,
} from '@nuxt/types/app'

export default (context: Context, inject: Inject) => {
  if (!firebase.apps.length) {
    const firebaseConfig = {
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      databaseURL: process.env.FIREBASE_DATABASE_URL,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      measurementId: process.env.FIREBASE_MEASUREMENT_ID,
    }
    firebase.initializeApp(firebaseConfig)
  }

  auth = firebase.auth()
  firestore = firebase.firestore()

  inject(`firebase`, firebase)

  if (process.client) {
    window.onNuxtReady(() => {
      firebase.analytics()
      firebase.performance()
    })
  }
}

export let auth : firebase.auth.Auth
export let firestore : firebase.firestore.Firestore
