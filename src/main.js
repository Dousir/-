// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import indexPage from '@/page/index'
import headerTop from '@/components/headerTop'
import footerBox from '@/components/footer/footerPage'

import 'mint-ui/lib/style.css'
import './assets/js/publicJs'
import './assets/js/flexible.debug'
import './assets/js/flexible_css.debug'

Vue.use(MintUI)
Vue.use(headerTop)
Vue.use(indexPage)
Vue.component('footerBox',footerBox)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  
  components: { App },
  template: '<App/>'
})
