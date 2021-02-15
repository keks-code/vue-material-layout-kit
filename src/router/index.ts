import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import TextContent from '../views/TextContent.vue'
import TestContent2 from '../views/TestContent2.vue'
import LayoutTopAppBarType1 from '../layouts/LayoutTopAppBarType1.vue'
import DrawerTopAppBarType3 from '../layouts/LayoutDrawerType3.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: LayoutTopAppBarType1 }
  },
  {
    path: '/top-app-bar',
    component: TextContent,
    meta: { layout: LayoutTopAppBarType1 }
  },
  {
    path: '/drawer-type3',
    component: TextContent,
    meta: { layout: DrawerTopAppBarType3 }
  },
  {
    path: '/drawer-type3/test2',
    component: TestContent2,
    meta: { layout: DrawerTopAppBarType3 }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { layout: LayoutTopAppBarType1 }
  }
]

const router = new VueRouter({
  routes
})

export default router
