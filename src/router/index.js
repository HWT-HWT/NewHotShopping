import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout/MyLayout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/Home',
    children: [
      {
        path: 'Home',
        component: () => import('@/views/Layout/components/MyHome.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/MyLogin.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
