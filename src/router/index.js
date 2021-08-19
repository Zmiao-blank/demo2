import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import( '../views/index/index.vue')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import( '../views/list/List.vue')
  },
  {
	 path: '/detail',
	 name: 'detail',
	 component: () => import( '../views/detail/detail.vue')
  },
  {
  	 path: '/register',
  	 name: 'register',
  	 component: () => import( '../views/register.vue')
  }
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
  routes
})


export default router
