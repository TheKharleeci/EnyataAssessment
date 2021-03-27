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
    allQuestions: [],
    question: [],
    questionCount: 1,
    questionIndex: 0,
    userAnswers: [],
    timerMinutes: 0,
    timerSeconds: 0,
    applicantCount: 0,
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
  },
  actions: {
    async loginUser({ commit }, payload) {
      const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/login', payload);
      const createdAt = response.data.data.user.created_at;
      const days = new Date(createdAt);
      days.setDate(days.getDate());
      let newDate = days.toISOString().substr(0, 10);
      newDate = newDate.replace(/-/g, '.');
      newDate = newDate.substring(2);
      newDate = newDate.split('.').reverse().join('.');

      commit('assignUser', response.data.data.user);
      commit('loggedIn', response.data.data);
      commit('currentDate', newDate);
      // commit('regUser', response.data);
      // console.log(response.data.data.user);
      // console.log(response.data.data);
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
      console.log(response.data);
    },
    async createQuestion({ commit }, payload) {
      const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/admin/createQuestion', payload);
      commit('testQuestions', response.data);
      // console.log(response.data);
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
        console.log(currQuestion);
        commit('currentQuestion', currQuestion);
        // dispatch('handleDisableButton');
      }
    },
    // selectAnswer({ commit, getters }) {

    // },
    // async getTime({ commit }, payload) {
    //   const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/admin/createQuestion', payload);
    //   const startMinutes = response.data;
    //   let time = startMinutes * 60;
    //   setInterval(updateCountdown, 1000);
    //   commit('testTime', time);
    // },
    // updateCountdown({ commit }) {
    //   const minutes = Math.floor(time / 60);
    //   let seconds = time % 60;
    //   seconds = seconds < 10 ? '0' + seconds : seconds;
    //   commit('setMinutes', minutes);
    //   commit('setSeconds', seconds);
    // },

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
      // dispatch('handleDisableButton');
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

    // checkLastQuestion({ getters }) {
    //   const index = getters.currentQuestionIndex;
    //   const questions = getters.getAllQuestions;
    //   if (index >= questions.length) {
    //     console.log('End of quiz');
    //   }
    // },
    // {{ "currentQuestionIndex >=getAllQuestions.length"}}
    // :disabled="questionIndex>=quiz.questions.length"
  },
  getters: {
    // loggedInUser: (state) => console.log(state.loginResponse),
    loggedInUser: (state) => state.loginResponse,
    registeredUsers: (state) => state.users,
    currentApplicant: (state) => state.currentUser,
    loggedInAdmin: (state) => state.admin,
    applicationDate: (state) => state.date,
    getAllQuestions: (state) => state.allQuestions,
    showCurrentQuestion: (state) => state.question,
    countQuestions: (state) => state.questionCount,
    currentQuestionIndex: (state) => state.questionIndex,
    quizTimeMinutes: (state) => state.setMinutes,
    quizTimeSeconds: (state) => state.setSeconds,
    totalApplications: (state) => state.applicantCount,
  },
  modules: {
  },
});
