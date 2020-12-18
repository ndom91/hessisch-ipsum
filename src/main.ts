import { createApp } from 'vue'
import router from './router'
import { store } from './store'
import App from './App.vue'
import './index.css'

import Toast, { PluginOptions } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const options: PluginOptions = {
  timeout: 2000
}

createApp(App).use(router).use(store).use(Toast, options).mount('#app')
