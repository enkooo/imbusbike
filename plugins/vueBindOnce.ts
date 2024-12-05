import { BindOncePlugin } from 'vue-bind-once'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(BindOncePlugin)
})
