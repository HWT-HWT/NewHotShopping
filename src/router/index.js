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
      },
      {
        path: '/category/:id',
        component: () => import('@/views/Layout/components/ClassifiCation.vue')
      },
      {
        path: '/category/sbu/:id',
        component: () => import('@/views/Layout/components/ArtiCle.vue')
      },
      {
        path: '/details/:id',
        component: () => import('@/views/Layout/components/DetAils.vue')
      },
      {
        path: '/cart/',
        component: () => import('@/views/Layout/components/MyCart.vue')
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
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      // 如果savedPosition存在（通常是在前进或后退时），则滚动到那个位置
      return savedPosition
    } else {
      // 否则，滚动到页面顶部
      return { x: 0, y: 0 }
    }
  }
})

export default router
