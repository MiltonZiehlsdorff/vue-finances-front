import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import { errorHandler } from './utils'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@/plugins/moment'
import '@/plugins/vuelidate'
import vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false
Vue.config.errorHandler = errorHandler

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
