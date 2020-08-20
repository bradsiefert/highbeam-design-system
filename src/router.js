import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

// Design System
import Breadcrumbs from '@/views/designsystem/ui/Breadcrumbs.vue'

Vue.use(VueRouter)

  const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },

  // Design System
  { path: '/designsystem/ui/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
