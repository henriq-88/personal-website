import Vue from 'vue'

const linkText = (value: string) => {
  if (!value) return
  if (typeof value !== `string`) value = String(value)
  return value.replace(/[^\w _]/g, ``)
    .replace(/[ _]/g, `-`)
    .toLowerCase()
}

Vue.filter(`linkText`, linkText)
