import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const vuexSession = new VuexPersistence({
  storage: window.sessionStorage,
});

export default new Vuex.Store({
  state: {
    users: [],
    currentUser: {},
    loginResponse: {},
    admin: {},
    adminDetails: [],
    date: [],
    registeredDay: [],
    allQuestions: [],
    question: [],
    questionCount: 1,
    questionIndex: 0,
    userAnswers: [],
    timerMinutes: 0,
    timerSeconds: 0,
    applicantCount: 0,
    days: 0,
    logoutResponse: {},
    // nextButtonDisabled: false,
    // previousButtonDisabled: true,
    // assessmentQuestions: [],
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
    testQuestions: (state, payload) => { state.allQuestions.push(...payload); },
    currentQuestion: (state, payload) => { state.question = payload; },
    updateQuestionCount: (state) => { state.questionCount += 1; },
    reduceQuestionCount: (state) => { state.questionCount -= 1; },
    raiseQuestionIndex: (state) => { state.questionIndex += 1; },
    reduceQuestionIndex: (state) => { state.questionIndex -= 1; },
    collectUserAnswers: (state, payload) => { state.userAnswers.push(payload); },
    setMinutes: (state, payload) => { state.timerMinutes = payload; },
    setSeconds: (state, payload) => { state.timerSeconds = payload; },
    updateApplicantCount: (state) => { state.applicantCount += 1; },
    updateRegDaysCount: (state, payload) => { state.days = payload; },
    regDay: (state, payload) => { state.registeredDay = payload; },
    loggedOut: (state, payload) => { state.logoutResponse = payload; },
  },
  actions: {
    async loginUser({ commit, dispatch }, payload) {
      const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/login', payload);
      const createdAt = response.data.data.user.created_at;
      const days = new Date(createdAt);
      // console.log(days);
      days.setDate(days.getDate());
      let newDate = days.toISOString().substr(0, 10);
      // console.log(newDate);
      newDate = newDate.replace(/-/g, '.');
      newDate = newDate.substring(2);
      newDate = newDate.split('.').reverse().join('.');

      commit('assignUser', response.data.data.user);
      commit('loggedIn', response.data.data);
      commit('currentDate', newDate);
      commit('regDay', days);
      dispatch('regDayCount');
      // commit('regUser', response.data);
      // console.log(response.data.data.user);
      // console.log(response.data.data);
    },
    regDayCount({ commit, getters }) {
      const start = new Date(getters.dayRegistered);
      // console.log(start);
      const end = new Date();
      // console.log(end);
      let diff = 0;
      const days = 1000 * 60 * 60 * 24;
      diff = end - start;
      diff = Math.floor(diff / days);
      // console.log(diff);
      commit('updateRegDaysCount', diff);
    },

    async userSignUp({ commit }, payload) {
      const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/signup', payload);
      commit('signInUser', response.data);
      console.log(response.data);
      commit('assignUser', response.data.data);
      commit('updateApplicantCount');
    },
    async loginAdmin({ commit }, payload) {
      const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/admin/login', payload);
      commit('currentAdminDetails', response.data);
      commit('currentAdmin', response.data.data.admin);
      // console.log(response.data.data);
      // console.log(response.data);
    },
    async createQuestion({ getters }, payload) {
      console.log(getters.loggedInAdminDetails.data.token);
      const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/admin/createQuestion', payload, {
        headers: {
          authorization: `Bearer ${getters.loggedInAdminDetails.data.token}`,
        },
      });
      console.log(payload);
      console.log(response);
    },
    async getQuestions({ commit, getters }) {
      // console.log(getters.loggedInUser.token);
      const quiz = await axios.get('https://enyata-recruitment-portal.herokuapp.com/user/question', {
        headers: {
          authorization: `Bearer ${getters.loggedInUser.token}`,
        },
      });
      const orderedQuestions = quiz.data.data;
      const response = orderedQuestions.sort(() => Math.random() - 0.5);
      commit('testQuestions', response);
    },
    // scoreQuestion({commit}) { },

    selectQuestion({ commit, getters }) {
      const index = getters.currentQuestionIndex;
      const questions = getters.getAllQuestions;
      if (questions.length !== 0) {
        const currQuestion = questions[index];
        const test = questions[index].id;
        console.log(currQuestion);
        console.log(test);
        commit('currentQuestion', currQuestion);
        // dispatch('handleDisableButton');
      }
    },
    // selectAnswer({ commit, getters }) {

    // },

    // checkUserCount({ commit, getters }) {},

    nextQuestion({ commit, getters, dispatch }) {
      const index = getters.currentQuestionIndex;
      const questions = getters.getAllQuestions;
      if (index === questions.length - 1) {
        console.log('End of quiz');
        return;
      }
      // const index = getters.currentQuestionIndex;
      // console.log(index);
      commit('raiseQuestionIndex');
      commit('updateQuestionCount');
      dispatch('selectQuestion');
    },
    prevQuestion({ commit, dispatch, getters }) {
      const index = getters.currentQuestionIndex;
      if (index === 0) {
        return;
      }
      commit('reduceQuestionIndex');
      commit('reduceQuestionCount');
      dispatch('selectQuestion');
      // dispatch('handleDisableButton');
    },

    async logout({ commit }) {
      await axios.post('https://enyata-recruitment-portal.herokuapp.com/logout')
        .then((response) => {
          console.log(response);
          commit('loggedIn', '');
        }).catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    // loggedInUser: (state) => console.log(state.loginResponse),
    loggedInUser: (state) => state.loginResponse,
    registeredUsers: (state) => state.users,
    currentApplicant: (state) => state.currentUser,
    loggedInAdmin: (state) => state.admin,
    loggedInAdminDetails: (state) => state.adminDetails,
    applicationDate: (state) => state.date,
    getAllQuestions: (state) => state.allQuestions,
    showCurrentQuestion: (state) => state.question,
    countQuestions: (state) => state.questionCount,
    currentQuestionIndex: (state) => state.questionIndex,
    quizTimeMinutes: (state) => state.setMinutes,
    quizTimeSeconds: (state) => state.setSeconds,
    totalApplications: (state) => state.applicantCount,
    daysSinceReg: (state) => state.days,
    dayRegistered: (state) => state.registeredDay,
    userCount: (state) => state.users.length,
  },
  modules: {
    plugins: [vuexSession.plugin],
  },
});
