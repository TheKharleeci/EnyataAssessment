import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  mutations: {
    regUser: (state, payload) => { state.users.push(payload); },
  },
  actions: {
    async loginUser({ commit }, payload) {
      const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/login', payload);
      commit('regUser', response.data);
      console.log(response);
    },
  },
  modules: {
  },
});
