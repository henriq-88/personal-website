import * as firebase from 'firebase'
import 'firebase/firestore'
import store from '@/store'

firebase.initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABSE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSEGING_SENDER_ID
})

firebase.auth().onAuthStateChanged(async user => {
  if (!user) return
  await store().dispatch('updateUser', user)
})