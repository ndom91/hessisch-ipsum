import { createApp } from 'vue'
import router from './router'
import { store } from './store'
import App from './App.vue'
import './index.css'

import Toast, { PluginOptions } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import VTooltip from 'v-tooltip'

const options: PluginOptions = {
  timeout: 2000,
  transition: 'Vue-Toastification__fade'
}

createApp(App)
  .use(router)
  .use(store)
  .use(VTooltip)
  .use(Toast, options)
  .mount('#app')
