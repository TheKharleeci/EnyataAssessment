import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import constants from '../constants';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toks: [], // added
    adminToks: [],
    status: '', // added
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
    timerMinutes: 0,
    timerSeconds: 0,
    applicantCount: 0,
    days: 0,
    logoutResponse: {},
    usersDetail: [],
    userPw: [],
    user: [],
    applicants: [],
    allApplicants: [],
    applicationStatus: '',
    timer: 200,
    usersAnswers: [],
    // answers: [],
    // nextButtonDisabled: false,
    // previousButtonDisabled: true,
    // assessmentQuestions: [],
    // check this for Modupe
    userData: {},
  },

  mutations: {
    signInUser: (state, payload) => { state.users.push(payload); },
    assignUser: (state, payload) => { state.currentUser = payload; },
    // assignPicture: (state, payload) => {
    //   state.currentUser.picture = payload.picture;
    //   state.currentUser.application_status = payload.application_status;
    // },
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
    setMinutes: (state, payload) => { state.timerMinutes = payload; },
    setSeconds: (state, payload) => { state.timerSeconds = payload; },
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
    // updateSelectedAnswers: (state, payload) => {state.}
    regDay: (state, payload) => { state.registeredDay = payload; },
    loggedOut: (state, payload) => { state.logoutResponse = payload; },
    reset: (state, payload) => { state.user.push(payload); },
    pendingApplicants: (state, payload) => { state.applicants = payload; },
    seeAppliedApplicants: (state, payload) => { state.allApplicants = payload; },
    setNewPassword: (state, payload) => { state.userPw = payload; },
    setRegister: (state, payload) => {
      state.usersDetail.push(payload);
    },
    changeApplicationStatus: (state, payload) => {
      state.currentUser.applicationStatus = payload;
    },
    authSuccess: (state, payload) => {
      state.status = 'success';
      state.toks.push(payload);
    },
    authAdminSuccess: (state, payload) => {
      state.status = 'success';
      state.adminToks.push(payload);
    },
    authError: (state) => {
      state.status = 'error';
      state.toks = [];
    },
    authRequest: (state) => { state.status = 'loading'; },
    getUserAnswers: (state, payload) => { state.usersAnswers.push(payload); },
    // check this for Modupe
    setUserData: (state, payload) => { state.userData = payload; },
  },
  actions: {
    async loginUser({ commit, dispatch }, payload) {
      const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/login', payload);
      const createdAt = response.data.data.user.created_at;
      const tokens = response.data.data.token;
      console.log(response.data);
      localStorage.setItem('user-token', tokens);
      const days = new Date(createdAt);
      // console.log(days);
      days.setDate(days.getDate());
      let newDate = days.toISOString().substr(0, 10);
      // console.log(newDate);
      newDate = newDate.replace(/-/g, '.');
      newDate = newDate.substring(2);
      newDate = newDate.split('.').reverse().join('.');
      axios.defaults.headers.common.Authorization = tokens;
      commit('authSuccess', tokens);
      commit('assignUser', response.data.data.user);
      console.log('hi', response.data.data.user);
      commit('loggedIn', response.data.data);
      commit('currentDate', newDate);
      commit('regDay', days);
      dispatch('regDayCount');
    },
    regDayCount({ commit, getters }) {
      const start = new Date(getters.dayRegistered);
      const end = new Date();
      let diff = 0;
      const days = 1000 * 60 * 60 * 24;
      diff = end - start;
      diff = Math.floor(diff / days);
      commit('updateRegDaysCount', diff);
    },

    async userSignUp({ commit }, payload) {
      const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/signup', payload);
      commit('signInUser', response.data);
      console.log(response.data);
      commit('assignUser', response.data.data);
      commit('updateApplicantCount');
    },
    async updateStatus({ commit }, payload) {
      console.log(payload);
      const { id } = payload;
      const response = await axios.put(`https://enyata-recruitment-portal.herokuapp.com/updateUser/${id}`, payload);
      commit('changeApplicationStatus', response.data);
      console.log(response.data);
    },
    async updateAdmin({ commit, getters }, payload) {
      const formdata = new FormData();
      Object.keys(payload).forEach((key) => (
        formdata.append(key, payload[key])
      ));
      const response = await axios.put('https://enyata-recruitment-portal.herokuapp.com/update', formdata, {
        headers: {
          authorization: `Bearer ${getters.loggedInAdminDetails.data.token}`,
        },
      });
      commit('currentAdmin', response.data);
      console.log(response.data);
    },
    async loginAdmin({ commit }, payload) {
      const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/admin/login', payload);
      const tokens = response.data.data.token;
      console.log(response.data);
      localStorage.setItem('admin-token', tokens);
      axios.defaults.headers.common.Authorization = tokens;
      commit('currentAdminDetails', response.data);
      commit('currentAdmin', response.data.data.admin);
      commit('authAdminSuccess', tokens);
    },
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
      delete axios.defaults.headers.common.Authorization;
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
    async setApplicants({ commit, getters }) {
      delete axios.defaults.headers.common.Authorization;
      // console.log(getters.loggedInUser.token);
      await axios.get('https://enyata-recruitment-portal.herokuapp.com/applicants', {
        headers: {
          authorization: `Bearer ${getters.loggedInAdminDetails.data.token}`,
        },
      })
        .then((response) => {
          console.log(response.data.data);
          commit('pendingApplicants', response.data.data);
        }).catch((error) => {
          console.log(error);
        });
    },
    // async submitAnswers({ getters }, payload) {
    //   console.log(payload);
    //   console.log(getters.loggedInUser);
    //   const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/answers', payload, {
    //     headers: {
    //       authorization: `Bearer ${getters.loggedInUser.token}`,
    //     },
    //   });
    //   console.log(response);
    // },
    async submitAnswers({ getters }, payload) {
      console.log('check', payload);
      const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/answers', { chosenAnsers: payload }, {
        headers: {
          authorization: `Bearer ${getters.loggedInUser.token}`,
        },
      });
      commit('getUserAnswers', response.data);
      console.log(response);
    },
    selectAnswer({ commit }, payload) {
      const currentAnswer = payload;
      console.log(currentAnswer);
      commit('collectUserAnswers', currentAnswer);
    },
    async getAllApplicants({ commit, getters }) {
      delete axios.defaults.headers.common.Authorization;
      // console.log(getters.loggedInUser.token);
      await axios.get('https://enyata-recruitment-portal.herokuapp.com/allApplicants', {
        headers: {
          authorization: `Bearer ${getters.loggedInAdminDetails.data.token}`,
        },
      })
        .then((response) => {
          // console.log(response.data);
          commit('seeAppliedApplicants', response.data.data);
        }).catch((error) => {
          console.log(error);
        });
    },

    selectQuestion({ commit, getters }) {
      const index = getters.currentQuestionIndex;
      const questions = getters.getAllQuestions;
      if (questions.length !== 0) {
        const currQuestion = questions[index];
        const test = questions[index].id;
        console.log(test);
        commit('currentQuestion', currQuestion);
      }
    },
    selectAnswer({ commit }, payload) {
      const currentAnswer = payload;
      console.log(currentAnswer);
      commit('collectUserAnswers', currentAnswer);
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
    nextQuestion({ commit, getters, dispatch }) {
      const index = getters.currentQuestionIndex;
      const questions = getters.getAllQuestions;
      if (index === questions.length - 1) {
        console.log('End of quiz');
        return;
      }
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
    async merge() {
      await axios.put('https://enyata-recruitment-portal.herokuapp.com/merge');
    },

    async getUserDetail({ commit, getters }, payload) {
      let formdata = new FormData();
      Object.keys(payload).forEach((key) => (
        formdata.append(key, payload[key])
      ));
      delete axios.defaults.headers.common.Authorization;
      // console.log('formdata', formdata.getAll('cv'));
      // console.log(payload);

      // check this for Modupe everything
      const response = await axios.post('https://enyata-recruitment-portal.herokuapp.com/apply', formdata, {
        headers: {
          authorization: `Bearer ${getters.loggedInUser.token}`,
        },
      });
      if (response) {
        const userData = {
          picture: response.data.data.picture,
          application_status: 'Pending',
        };
        commit('setUserData', userData);
      }
      // console.log('whoo', response);
      // commit('assignPicture', userData);
      // console.log('curr', this.assignPicture);
      formdata = {};
      commit('setRegister', response.data);
      axios.put('https://enyata-recruitment-portal.herokuapp.com/merge');
      // commit('assignUser', response.data.data.user);
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
          commit('authError');
          commit('loggedIn', '');
          localStorage.removeItem('user-token');
          delete axios.defaults.headers.common.Authorization;
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
    quizTimeMinutes: (state) => state.setMinutes,
    quizTimeSeconds: (state) => state.setSeconds,
    totalApplications: (state) => state.applicantCount,
    daysSinceReg: (state) => state.days,
    dayRegistered: (state) => state.registeredDay,
    userCount: (state) => state.users.length,
    isAuthenticated: (state) => state.toks.length, // added
    isAdminAuthenticated: (state) => state.adminToks.length,
    authStatus: (state) => state.status, // added
    displayUserDp: (state) => state.userProfilePicture,
    error: (state) => state.loginError,
    numberOfSetQuestions: (state) => state.step,
    viewQuestions: (state) => state.setQuestions,
    questionNumber: (state) => state.totalSetQuestions,
    showCurrentSetQuestion: (state) => state.currentSetQuestion,

    getApplicants: (state) => {
      const item = state.applicants;
      console.log(item);
      return item;
    },
    getNumberOfApplicants: (state) => {
      const item = state.allApplicants.length;
      console.log(state.allApplicants.length);
      return item;
    },

    getChosenAnswers: (state) => state.userAnswers,
    // check this for Modupe
    getUserData: (state) => state.userData,

    getChosenAnswers: (state) => state.userAnswers,
  },
  modules: {
  },
  // plugins: [vuexLocal.plugin],
});
