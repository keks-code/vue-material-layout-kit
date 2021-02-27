import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Layouts from '../views/Layouts.vue'
import TextContent from '../views/TextContent.vue'
import Dashboard from '../views/Dashboard.vue'
import Layout101 from '../layouts/Layout101.vue'
import Drawer203 from '../layouts/Layout203.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Layouts,
    meta: { layout: Layout101 }
  },
  {
    path: '/layout101',
    component: TextContent,
    meta: { layout: Layout101 }
  },
  {
    path: '/layout203',
    component: Dashboard,
    meta: { layout: Drawer203 }
  },
  {
    path: '/layout203/cardlist',
    component: TextContent,
    meta: { layout: Drawer203 }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { layout: Layout101 }
  }
]

const router = new VueRouter({
  routes
})

export default router
