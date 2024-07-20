import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/elementUI.js'
import '@/style/style.scss'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
