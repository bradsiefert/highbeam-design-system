import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Framework from '@/views/Framework.vue'
import ContainersandGrid from '@/views/ContainersandGrid.vue'
import Spacing from '@/views/Spacing.vue'
import Colors from '@/views/Colors.vue'
import Typography from '@/views/Typography.vue'
import Icons from '@/views/Icons.vue'

// Design System
import Alerts from '@/views/designsystem/ui/Alerts.vue'
import Badges from '@/views/designsystem/ui/Badges.vue'
import Breadcrumbs from '@/views/designsystem/ui/Breadcrumbs.vue'
import Buttons from '@/views/designsystem/ui/Buttons.vue'
import Cards from '@/views/designsystem/ui/Cards.vue'
import Forms from '@/views/designsystem/ui/Forms.vue'
import Menus from '@/views/designsystem/ui/Menus.vue'
import Pagination from '@/views/designsystem/ui/Pagination.vue'
import ProgressBar from '@/views/designsystem/ui/ProgressBar.vue'
import Tables from '@/views/designsystem/ui/Tables.vue'
import Tabs from '@/views/designsystem/ui/Tabs.vue'
import Toasts from '@/views/designsystem/ui/Toasts.vue'

Vue.use(VueRouter)

  const routes = [
  // Design System Overview
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/framework', name: 'Framework', component: Framework },
  { path: '/grid', name: 'ContainersandGrid', component: ContainersandGrid },
  { path: '/spacing', name: 'Spacing', component: Spacing },
  { path: '/colors', name: 'Colors', component: Colors },
  { path: '/typography', name: 'Typography', component: Typography },
  { path: '/icons', name: 'Icons', component: Icons },
  
  // Design System Data Components
  { path: '/designsystem/data/tables', name: 'Tables', component: Tables },

  // Design System UI Elements
  { path: '/designsystem/ui/alerts', name: 'Alerts', component: Alerts },
  { path: '/designsystem/ui/badges', name: 'Badges', component: Badges },
  { path: '/designsystem/ui/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/designsystem/ui/buttons', name: 'Buttons', component: Buttons },
  { path: '/designsystem/ui/cards', name: 'Cards', component: Cards },
  { path: '/designsystem/ui/forms', name: 'Forms', component: Forms },
  { path: '/designsystem/ui/menus', name: 'Menus', component: Menus },
  { path: '/designsystem/ui/pagination', name: 'Pagination', component: Pagination },
  { path: '/designsystem/ui/progressbar', name: 'ProgressBar', component: ProgressBar },
  { path: '/designsystem/ui/tabs', name: 'Tabs', component: Tabs },
  { path: '/designsystem/ui/toasts', name: 'Toasts', component: Toasts },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
