import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Breadcrumbs from '../views/designsystem/Breadcrumbs.vue'

Vue.use(VueRouter)

  const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/designsystem/components/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  // {
  //   path: '/designsystem',
  //   name: 'DesignSystem',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/DesignSystem.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
