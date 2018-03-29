import Vue from 'vue'

const linkText = (value) => {
  if (!value) return
  if (typeof value !== 'string') string = String(value)
  return value.replace(/[^\w _]/g, '').replace(/[ _]/g, '-').toLowerCase()
}

const titlecase = (value) => {
  if (!value) return
  value = String(value)
  return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
}

Vue.filter('titlecase', titlecase)
Vue.filter('linkText', linkText)