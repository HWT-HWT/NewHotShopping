import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/elementUI.js'
import '@/style/style.scss'
import 'element-ui/lib/theme-chalk/index.css'

import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  preLoad: 1.3, // 预加载的宽高比
  attempt: 1 // 加载错误后最大尝试次数
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
