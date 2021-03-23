import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    loggedInUser: [],
    loginResponse: {},
    admin: [],
  },
  getter: {

  },
  mutations: {
    signInUser: (state, payload) => { state.users.push(payload); },
    regUser: (state, payload) => { state.loggedInUser.push(payload); },
    loggedIn: (state, payload) => { state.loginResponse = payload; },
  },
  actions: {
    async loginUser({ commit }, payload) {
      const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/login', payload);
      // this.$router.push('/client');
      commit('loggedIn', response.data);
      commit('regUser', response.data);
      console.log(response.data);
      // console.log('hello there');
    },
    async userSignUp({ commit }, payload) {
      console.log(payload);
      const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/signup', payload);
      commit('signInUser', response.data);
      console.log(response);
    },
  },
  getters: {
    loggedInUser: (state) => state.loginResponse,
  },
  modules: {
  },
});
