import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/MyLogin.vue'
import Layout from '@/views/Layout/MyLayout.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
