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
import AssessmentHistory from '../views/AssessmentHistory.vue';
import CreateApplication from '../views/CreateApplication.vue';

Vue.use(VueRouter);

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
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
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
  {
    path: '/successfulPage',
    name: 'SuccessfulPage',
    component: SuccessfulPage,
  },
  {
    path: '/takeAssess',
    name: 'TakeAssess',
    component: TakeAssess,
  },
  {
    path: '/compose',
    name: 'ComposeAssess',
    component: ComposeAssess,
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
    path: '/history',
    name: 'AssessmentHistory',
    component: AssessmentHistory,
  },
  {
    path: '/create',
    name: 'CreateApplication',
    component: CreateApplication,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
