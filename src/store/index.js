import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    currentUser: {},
    loginResponse: {},
    admin: {},
    adminDetails: {},
    date: [],
  },
  getter: {

  },
  mutations: {
    signInUser: (state, payload) => { state.users.push(payload); },
    assignUser: (state, payload) => { state.currentUser = payload; },
    loggedIn: (state, payload) => { state.loginResponse = payload; },
    currentUser: (state, payload) => { state.loggedIn = payload; },
    currentDate: (state, payload) => { state.date = payload; },
    currentAdmin: (state, payload) => { state.admin = payload; },
    currentAdminDetails: (state, payload) => { state.adminDetails = payload; },
  },
  actions: {
    async loginUser({ commit }, payload) {
      const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/login', payload);
      // const date = response.data.data.user.created_at;
      // console.log(date);

      const date = '2021-03-23T13:36:28.186Z';
      date.setDate(date.getDate());
      let newDate = date.toISOString().substr(0, 10);
      newDate = newDate.replace(/-/g, '.');
      newDate = newDate.substring(2);
      newDate = newDate.split('.').reverse().join('.');
      console.log(newDate);

      commit('assignUser', response.data.data.user);
      commit('loggedIn', response.data);
      // commit('currentDate', response.data.data.user.created_at);
      // commit('regUser', response.data);
      console.log(response.data.data.user);
    },
    async userSignUp({ commit }, payload) {
      const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/signup', payload);
      commit('signInUser', response.data);
      console.log(response.data);
      commit('assignUser', response.data.data);
      // commit('currentDate', response.data.data.created_at);
      // console.log(response.data);
    },
    async loginAdmin({ commit }, payload) {
      const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/admin/login', payload);
      commit('currentAdminDetails', response.data);
      commit('currentAdmin', response.data.data.admin);
      // commit('regUser', response.data);
      // console.log(response.data);
      console.log(response.data);
    },

  },
  getters: {
    // loggedInUser: (state) => console.log(state.loginResponse),
    loggedInUser: (state) => state.loginResponse,
    registeredUsers: (state) => state.users,
    currentApplicant: (state) => state.currentUser,
    loggedInAdmin: (state) => state.admin,
    dateNow: (state) => state.date,
  },
  modules: {
  },
});
