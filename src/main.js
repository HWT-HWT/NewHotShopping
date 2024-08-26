import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/elementUI.js'
import '@/style/style.scss'
import 'element-ui/lib/theme-chalk/index.css'

import VueLazyload from 'vue-lazyload'
import InfiniteScroll from 'vue-infinite-scroll'

Vue.config.productionTip = false

Vue.use(InfiniteScroll)

Vue.use(VueLazyload, {
  preLoad: 1.3, // 预加载的宽高比
  attempt: 1 // 加载错误后最大尝试次数
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
