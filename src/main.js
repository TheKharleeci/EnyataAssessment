import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VModal from 'vue-js-modal';
import Vuelidate from 'vuelidate';
import VueFileAgent from 'vue-file-agent';
// eslint-disable-next-line no-unused-vars
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VModal);
Vue.use(Vuelidate);
Vue.use(VueFileAgent);

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
