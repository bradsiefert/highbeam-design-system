import Vue from 'vue'
import VueRouter from 'vue-router'

// Design System Overview
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Layout from '@/views/Layout.vue'
import Spacing from '@/views/Spacing.vue'
import Colors from '@/views/Colors.vue'
import Typography from '@/views/Typography.vue'
import Icons from '@/views/Icons.vue'
import Install from '@/views/Install.vue'

// Design System Data Components
import Metrics from '@/views/designsystem/data/Metrics.vue'
import Tables from '@/views/designsystem/data/Tables.vue'

// Design System UI Elements
import Alerts from '@/views/designsystem/ui/Alerts.vue'
import Badges from '@/views/designsystem/ui/Badges.vue'
import Breadcrumbs from '@/views/designsystem/ui/Breadcrumbs.vue'
import Buttons from '@/views/designsystem/ui/Buttons.vue'
import Cards from '@/views/designsystem/ui/Cards.vue'
import Forms from '@/views/designsystem/ui/Forms.vue'
import ListGroup from '@/views/designsystem/ui/ListGroup.vue'
import Pagination from '@/views/designsystem/ui/Pagination.vue'
import ProgressBar from '@/views/designsystem/ui/ProgressBar.vue'
import Tabs from '@/views/designsystem/ui/Tabs.vue'
import Toasts from '@/views/designsystem/ui/Toasts.vue'

Vue.use(VueRouter)

const routes = [
  // Design System Overview
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/layout', name: 'Layout', component: Layout },
  { path: '/spacing', name: 'Spacing', component: Spacing },
  { path: '/colors', name: 'Colors', component: Colors },
  { path: '/typography', name: 'Typography', component: Typography },
  { path: '/icons', name: 'Icons', component: Icons },
  { path: '/install', name: 'Install', component: Install },
  
  // Design System Data Components
  { path: '/designsystem/data/metrics', name: 'Metrics', component: Metrics },
  { path: '/designsystem/data/tables', name: 'Tables', component: Tables },

  // Design System UI Elements
  { path: '/designsystem/ui/alerts', name: 'Alerts', component: Alerts },
  { path: '/designsystem/ui/badges', name: 'Badges', component: Badges },
  { path: '/designsystem/ui/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/designsystem/ui/buttons', name: 'Buttons', component: Buttons },
  { path: '/designsystem/ui/cards', name: 'Cards', component: Cards },
  { path: '/designsystem/ui/forms', name: 'Forms', component: Forms },
  { path: '/designsystem/ui/listgroup', name: 'ListGroup', component: ListGroup },
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
