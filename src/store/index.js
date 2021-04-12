import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import constants from '../constants';
// import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage,
// key: 'clients',
// });

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
    totalSetQuestions: 1,
    allSetQuestionsCount: 1,
    step: 0,
    setQuestions: [],
    currentSetQuestion: {},
    userAnswers: [],
    timer: 200,
    applicantCount: 0,
    days: 0,
    logoutResponse: {},
    usersDetail: [],
    userPw: [],
    userProfilePicture: [],
    loginError: '',
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
    testQuestions: (state, payload) => { state.allQuestions = payload; },
    currentQuestion: (state, payload) => { state.question = payload; },
    updateQuestionCount: (state) => { state.questionCount += 1; },
    reduceQuestionCount: (state) => { state.questionCount -= 1; },
    resetQuestionCount: (state) => { state.questionCount = 1; },
    resetQuestionIndex: (state) => { state.questionIndex = 0; },
    raiseQuestionIndex: (state) => { state.questionIndex += 1; },
    reduceQuestionIndex: (state) => { state.questionIndex -= 1; },
    collectUserAnswers: (state, payload) => { state.userAnswers.push(payload); },
    setTimer: (state, payload) => { state.timer = payload; },
    updateApplicantCount: (state) => { state.applicantCount += 1; },
    addNewQuestion: (state, payload) => {
      const index = state.step;
      console.log(index);
      state.setQuestions[index] = payload;
      // state.setQuestions.push(payload);
    },
    countSetQuestions: (state) => { state.step += 1; },
    prevSetQuestion: (state) => { state.step -= 1; },
    // countTotalQuestions: (state) => { state.totalSetQuestions += 1; },
    countTotalQuestions: (state) => {
      if (state.totalSetQuestions < constants.totalQuestionNumber) {
        state.totalSetQuestions += 1;
        console.log('check', state.totalSetQuestions);
      } else state.totalSetQuestions = constants.totalQuestionNumber;
    },
    reduceTotalQuestions: (state) => { state.totalSetQuestions -= 1; },
    // reduceCurrQuestions: (state) => { state.totalSetQuestions -= 1; },
    allSetQuestions: (state) => { state.allSetQuestionsCount += 1; },
    changeCurrentQuestion: (state, payload) => { state.currentSetQuestion = payload; },
    updateRegDaysCount: (state, payload) => { state.days = payload; },
    regDay: (state, payload) => { state.registeredDay = payload; },
    loggedOut: (state, payload) => { state.logoutResponse = payload; },
    reset: (state, payload) => { state.user.push(payload); },
    setNewPassword: (state, payload) => { state.userPw = payload; },
    setRegister: (state, payload) => {
      state.usersDetail.push(payload);
    },
    setAvi: (state, payload) => { state.userProfilePicture = payload; },
    setLoginError: (state, payload) => { state.loginError = payload; },
  },
  actions: {
    async loginUser({ commit, dispatch }, payload) {
      let response;
      try {
        response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/login', payload);
      } catch (error) {
        console.log('Invalid login details');
        commit('setLoginError', 'Invalid login details');
        return;
      }
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
    async updateAdmin({ commit, getters }, payload) {
      console.log(payload);
      const response = await axios.put('https://enyata-recruitment-portal.herokuapp.com/update', payload, {
        headers: {
          authorization: `Bearer ${getters.loggedInAdminDetails.data.token}`,
        },
      });
      commit('currentAdmin', response.data);
      console.log(response.data);
      // commit('', response.data.data);
      // commit('');
    },

    async loginAdmin({ commit }, payload) {
      const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/admin/login', payload);
      commit('currentAdminDetails', response.data);
      commit('currentAdmin', response.data.data.admin);
      // console.log(response.data.data);
      // console.log(response.data);
    },

    // async setTime({ commit, getters }, payload) {
    //   console.log(payload);
    //   const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/time', payload, {
    //     headers: {
    //       authorization: `Bearer ${getters.loggedInAdminDetails.data.token}`,
    //     },
    //   });
    //   console.log(response.data);
    // },

    // async getTime({ commit, getters }) {
    //   console.log(payload);
    //   const response = await axios.get('https://enyata-recruitment-portal.herokuapp.com/gettime' {
    //     headers: {
    //       authorization: `Bearer ${getters.loggedInUser.token}`,
    //     },
    //   });
    //   commit('setTimer', response.data);
    //   console.log(response.data);
    // },

    async userAvi({ commit, getters }) {
      const response = await axios.get('https://enyata-recruitment-portal.herokuapp.com/singleUser', {
        headers: {
          authorization: `Bearer ${getters.loggedInUser.token}`,
        },
      });
      console.log(response);
      commit('setAvi', response);
    },

    async createQuestion({ getters }, payload) {
      console.log(payload);
      console.log(getters.loggedInAdminDetails.data.token);
      const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/admin/createQuestion', { questions: payload }, {
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
      console.log(response);
      commit('resetQuestionCount');
      commit('resetQuestionIndex');
      commit('testQuestions', response);
    },

    selectQuestion({ commit, getters }) {
      const index = getters.currentQuestionIndex;
      const questions = getters.getAllQuestions;
      if (questions.length !== 0) {
        const currQuestion = questions[index];
        // const test = questions[index].id;
        // console.log(currQuestion);
        // console.log(test);
        commit('currentQuestion', currQuestion);
        // dispatch('handleDisableButton');
      }
    },
    // CHECK THIS
    async submitAnswers({ getters }, payload) {
      console.log(payload);
      console.log(getters.loggedInUser);
      const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/user/answers', payload, {
        headers: {
          authorization: `Bearer ${getters.loggedInUser.token}`,
        },
      });
      console.log(response);
    },

    setNewQuestion({ commit, getters }, payload) {
      const currentQuestion = payload;
      commit('addNewQuestion', currentQuestion);

      commit('countSetQuestions');
      commit('countTotalQuestions');
      const step = getters.numberOfSetQuestions;
      const questions = getters.viewQuestions;
      const nextQuestion = questions[step];
      commit('changeCurrentQuestion', nextQuestion);
    },
    showPrevQuestion({ commit, getters }) {
      commit('prevSetQuestion');
      commit('reduceTotalQuestions');
      const step = getters.numberOfSetQuestions;
      const questions = getters.viewQuestions;
      const currentQuestion = questions[step];
      commit('changeCurrentQuestion', currentQuestion);
      console.log(getters.showCurrentSetQuestion);
    },
    // async createQuestion({ getters }, payload) {
    //   console.log(payload);
    //   console.log(getters.loggedInAdminDetails.data.token);
    //   const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/admin/createQuestion', payload, {
    //     headers: {
    //       authorization: `Bearer ${getters.loggedInAdminDetails.data.token}`,
    //     },
    //   });
    //   console.log(payload);
    //   console.log(response);
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
    // async getUserDetail({ commit, getters }, payload) {
    //   const response = axios.post('https://enyata-recruitment-portal.herokuapp.com/apply', payload, {
    //     headers: {
    //       authorization: `Bearer ${getters.loggedInUser.token}`,
    //     },
    //   });
    //   commit('setRegister', response.data);
    //   console.log(response);
    // },

    async getUserDetail({ commit, getters }, payload) {
      let formdata = new FormData();
      Object.keys(payload).forEach((key) => (
        formdata.append(key, payload[key])
      ));
      // console.log('formdata', formdata.getAll('cv'));
      // console.log(payload);
      const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/apply', formdata, {
        headers: {
          authorization: `Bearer ${getters.loggedInUser.token}`,
        },
      });
      formdata = {};
      commit('setRegister', response.data);
      console.log(response);
    },

    async resetPassword({ commit }, payload) {
      const formdata = new FormData();
      await axios.post('https://enyata-recruitment-portal.herokuapp.com/user/reset', payload, formdata)
        .then((response) => {
          console.log(response);
          commit('reset', response.data);
        }).catch((error) => {
          console.log(error);
          console.log(payload);
        });
    },

    async newPassword({ commit }, { password, token }) {
      await axios.put(`https://enyata-recruitment-portal.herokuapp.com/resetPassword/${token}`, { password })
        .then((response) => {
          console.log(response);
          commit('setNewPassword', response.data);
        }).catch((error) => {
          console.log(error);
          console.log(password);
        });
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
    quizTime: (state) => state.timer,
    totalApplications: (state) => state.applicantCount,
    daysSinceReg: (state) => state.days,
    dayRegistered: (state) => state.registeredDay,
    userCount: (state) => state.users.length,
    displayUserDp: (state) => state.userProfilePicture,
    error: (state) => state.loginError,
    numberOfSetQuestions: (state) => state.step,
    viewQuestions: (state) => state.setQuestions,
    questionNumber: (state) => state.totalSetQuestions,
    showCurrentSetQuestion: (state) => state.currentSetQuestion,
  },
  modules: {
  },
  // plugins: [vuexLocal.plugin],
});
