import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBootstrap, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret, faClipboard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faClipboard, faBootstrap, faFontAwesome)
Vue.component('font-awesome-icon', FontAwesomeIcon)

import './assets/scss/app.scss'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')