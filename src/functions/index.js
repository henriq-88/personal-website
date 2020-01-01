import functions from 'firebase-functions'
import { Nuxt } from 'nuxt'
import express from 'express'

const app = express()

const config = {
  dev: false
}

const nuxt = new Nuxt(config)

let isReady = false
const readyPromise = nuxt
  .ready()
  .then(() => {
    isReady = true
  })
  .catch(() => {
    process.exit(1)
  })

async function handleRequest (req, res) {
  if (!isReady) {
    await readyPromise
  }
  res.set(`Cache-Control`, `public, max-age=1, s-maxage=1`)
  await nuxt.render(req, res)
}

app.get(`*`, handleRequest)
app.use(handleRequest)
exports.nuxtssr = functions.https.onRequest(app)
