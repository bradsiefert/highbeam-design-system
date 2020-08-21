import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'

// Design System
import Alerts from '@/views/designsystem/ui/Alerts.vue'
import Badges from '@/views/designsystem/ui/Badges.vue'
import Breadcrumbs from '@/views/designsystem/ui/Breadcrumbs.vue'
import Buttons from '@/views/designsystem/ui/Buttons.vue'

Vue.use(VueRouter)

  const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },

  // Design System
  { path: '/designsystem/ui/alerts', name: 'Alerts', component: Alerts },
  { path: '/designsystem/ui/badges', name: 'Badges', component: Badges },
  { path: '/designsystem/ui/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/designsystem/ui/buttons', name: 'Buttons', component: Buttons },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
