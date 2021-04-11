import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import UserLogin from '../views/UserLogin.vue';
import LoginAdmin from '../views/LoginAdmin.vue';
import Dashboard from '../views/Dashboard.vue';
import Entries from '../views/Entries.vue';
import Results from '../views/Results.vue';
import Questions from '../views/Questions.vue';
import ClientDashboard from '../views/ClientDashboard.vue';
import AdminProfile from '../views/AdminProfile.vue';
import UserSignup from '../views/UserSignup.vue';
import AdminTimer from '../views/AdminTimer.vue';
import SuccessfulPage from '../views/SuccessfulPage.vue';
import TakeAssess from '../views/TakeAssess.vue';
import ComposeAssess from '../views/ComposeAssess.vue';
import ForgetPassword from '../components/ForgetPassword.vue';
import ModalPassword from '../components/ModalPassword.vue';
import ResetPassword from '../components/ResetPassword.vue';
import ApplicationDashboard from '../views/ApplicationDashboard.vue';
import ResetSuccessful from '../components/ResetSuccessful.vue';
import SuccessfulApplication from '../components/SuccessfulApplication.vue';
import store from '../store';
import ApproveModal from '../components/ApproveModal.vue';
import DeclineModal from '../components/DeclineModal.vue';

Vue.use(VueRouter);
const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next();
    // console.log(store.getters.isAuthenticated);
    return;
  }
  next('/UserLogin');
};
const ifAuthenticatedRegistered = (to, from, next) => {
  // console.log(store.getters.currentApplicant.application_status);
  // console.log(store.getters.currentApplicant.application_status === null);
  // console.log(store.getters.isAuthenticated);
  if (store.getters.isAuthenticated
    && store.getters.currentApplicant.application_status) {
    // console.log(store.getters.isAuthenticated);
    // console.log(store.getters.currentApplicant.application_status === null);
    next('/client');
  } else if (store.getters.isAuthenticated
&& !store.getters.currentApplicant.application_status) {
    next();
  } else {
    next('/');
  }
};

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
    // beforeRouteLeave: ifAuthenticatedRegistered,
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
    component: Questions.vue,
    beforeEnter: ifAuthenticated,
  },
  {
    path: '/admin/login',
    name: 'LoginAdmin',
    component: LoginAdmin,
  },
  {
    path: '/app',
    name: 'ApplicationDashboard',
    component: ApplicationDashboard,
    beforeEnter: ifAuthenticatedRegistered,
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
    path: '/resetSuccessful',
    name: 'ResetSuccessful',
    component: ResetSuccessful,
  },
  {
    path: '/SuccessfulApplication',
    name: 'SuccessfulApplication',
    component: SuccessfulApplication,
  },
  {
    path: '/approve',
    name: 'ApproveModal',
    component: ApproveModal,
  },
  {
    path: '/decline',
    name: 'DeclineModal',
    component: DeclineModal,
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
