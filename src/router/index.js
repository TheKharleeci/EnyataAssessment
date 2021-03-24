import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import LoginAdmin from '../views/LoginAdmin.vue';
import Dashboard from '../views/Dashboard.vue';
import Two from '../views/Two.vue';
import Entries from '../views/Entries.vue';
import Results from '../views/Results.vue';
import ClientDashboard from '../views/ClientDashboard.vue';
import AdminProfile from '../views/AdminProfile.vue';
import UserSignup from '../views/UserSignup.vue';
import LandingPage from '../views/LandingPage.vue';
import AdminTimer from '../views/AdminTimer.vue';

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
    path: '/admin/login',
    name: 'LoginAdmin',
    component: LoginAdmin,
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
  {
    path: '/entries',
    name: 'Entries',
    component: Entries,
  },
  {
    path: '/results',
    name: 'Results',
    component: Results,
  },
  {
    path: '/client',
    name: 'ClientDashboard',
    component: ClientDashboard,
  },
  {
    path: '/adminProfile',
    name: 'AdminProfile',
    component: AdminProfile,
  },
  {
    path: '/signup',
    name: 'UserSignup',
    component: UserSignup,
  },
  {
    path: '/landing',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/timer',
    name: 'AdminTimer',
    component: AdminTimer,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
