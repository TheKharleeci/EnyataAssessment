import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import UserLogin from '../views/UserLogin.vue';
import LoginAdmin from '../views/LoginAdmin.vue';
import Dashboard from '../views/Dashboard.vue';
import Entries from '../views/Entries.vue';
import Results from '../views/Results.vue';
import ClientDashboard from '../views/ClientDashboard.vue';
import AdminProfile from '../views/AdminProfile.vue';
import UserSignup from '../views/UserSignup.vue';
import LandingPage from '../views/LandingPage.vue';
import AdminTimer from '../views/AdminTimer.vue';
import SuccessfulPage from '../views/SuccessfulPage.vue';
import TakeAssess from '../views/TakeAssess.vue';
import ComposeAssess from '../views/ComposeAssess.vue';
import ForgetPassword from '../components/ForgetPassword.vue';
import ModalPassword from '../components/ModalPassword.vue';
import ResetPassword from '../components/ResetPassword.vue';
import DashboardForm from '../components/DashboardForm.vue';
import ApplicationDashboard from '../views/ApplicationDashboard.vue';
import store from '../store';

Vue.use(VueRouter);
const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    console.log(store.getters.isAuthenticated);
    return;
  }
  next('/UserLogin');
};
// const ifAuthenticatedRegistered = (to, from, next) => {
//   console.log(store.getters.currentApplicant.application_status);
//   if (store.getters.isAuthenticated &&
// store.getters.currentApplicant.application_status !== 'Pending') {
//     next();
//   } else if (store.getters.isAuthenticated
// && store.getters.currentApplicant.application_status === 'Pending') {
//     next('/dashboard');
//   }
//   next('/UserLogin');
// };

// const checkChanges = (to, from, next) => {
//   const answer = window.confirm('Do you really want to leave? you have unsaved changes!');
//   if (answer) {
//     next();
//   } else {
//     next(false);
//   }
// };
const ifAdminAuthenticated = (to, from, next) => {
  if (store.getters.isAdminAuthenticated) {
    next();
    console.log(store.getters.isAdminAuthenticated);
    return;
  }
  next('/');
};

const routes = [
  {
    path: '/userLogin',
    name: 'UserLogin',
    component: UserLogin,
  },
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
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/admin/login',
    name: 'LoginAdmin',
    component: LoginAdmin,
  },
  {
    path: '/dashboard1',
    name: 'DashboardForm',
    component: DashboardForm,
  },
  {
    path: '/app',
    name: 'ApplicationDashboard',
    component: ApplicationDashboard,
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: ifAdminAuthenticated,
  },
  {
    path: '/entries',
    name: 'Entries',
    component: Entries,
    beforeEnter: ifAdminAuthenticated,
  },
  {
    path: '/results',
    name: 'Results',
    component: Results,
    beforeEnter: ifAdminAuthenticated,
  },
  {
    path: '/client',
    name: 'ClientDashboard',
    component: ClientDashboard,
    beforeEnter: ifAuthenticated,
    // meta: { requiresAuth: true },
  },
  {
    path: '/adminProfile',
    name: 'AdminProfile',
    component: AdminProfile,
    beforeEnter: ifAdminAuthenticated,
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
    beforeEnter: ifAdminAuthenticated,
  },
  {
    path: '/successfulPage',
    name: 'SuccessfulPage',
    component: SuccessfulPage,
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/takeAssess',
    name: 'TakeAssess',
    component: TakeAssess,
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/compose',
    name: 'ComposeAssess',
    component: ComposeAssess,
    beforeEnter: ifAdminAuthenticated,
  },
  {
    path: '/forget',
    name: 'ForgetPassword',
    component: ForgetPassword,
  },
  {
    path: '/modal',
    name: 'ModalPassword',
    component: ModalPassword,
  },
  {
    path: '/resetpassword/:token',
    name: 'ResetPassword',
    component: ResetPassword,
  },
  {
    path: '/404',
    redirect: {
      name: 'LandingPage',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// const ifNotAuthenticated = (to, from, next) => {
//   if (!store.getters.isAuthenticated) {
//     next();
//     return;
//   }
//   next('/');
// };
export default router;
