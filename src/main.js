import Vue from 'vue'
import VueCodeHighlight from 'vue-code-highlight';
 
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBootstrap, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { faUserSecret, faClipboard, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faClipboard, faBootstrap, faFontAwesome, faAddressCard)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueCodeHighlight)

import './assets/scss/app.scss'
import 'vue-code-highlight/themes/prism.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
