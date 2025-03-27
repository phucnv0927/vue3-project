import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { isTokenExpired } from '@/utils/authGurad'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Ecommerce',
    component: () => import('@/views/Ecommerce.vue'),
    meta: {
      title: 'eCommerce Dashboard'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Auth/Signin.vue'),
    meta: {
      title: 'Login'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title as string) || "Vue 3";
  if (to.path === '/login' && !isTokenExpired()) {
    return next('/')
  }
  next()
})

export default router
