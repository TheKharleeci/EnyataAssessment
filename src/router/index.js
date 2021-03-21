import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Page from '../views/Page.vue';
import Dashboard from '../views/Dashboard.vue';
import Two from '../views/Two.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/questions',
    name: 'Questions',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Questions.vue'),
  },
  {
    path: '/page',
    name: 'Page',
    component: Page,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/two',
    name: 'Two',
    component: Two,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
