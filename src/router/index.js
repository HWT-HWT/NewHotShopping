import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout/MyLayout.vue'
Vue.use(VueRouter)

// const category =

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
      },
      {
        path: 'category/:id',
        component: () => import('@/views/Layout/components/ClassifiCation.vue')
      },
      {
        path: '/sbu/:id',
        component: () => import('@/views/Layout/components/ArtiCle.vue')
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
