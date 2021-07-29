import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path:'/2-2',
    name:'axios请求方法',
    component: () => import('../views/2-2.vue')
  },{
    path:'/2-3',
    name:'axios并发请求',
    component: () => import('../views/2-3.vue')
  },{
    path:'/3-1',
    name:'axios实力',
    component: () => import('../views/3-1.vue')
  },{
    path:'/contantlist',
    name:'联系人列表',
    component: () => import('../views/contantList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
