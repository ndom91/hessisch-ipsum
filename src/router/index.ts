import { createRouter, createWebHashHistory } from 'vue-router'
import { Component } from 'vue'
import Home from '/@views/Home.vue'

const routes: Array<{ path: string; name: string; component: Component }> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('/@views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
