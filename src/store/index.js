import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  isLogged: !!localStorage.getItem('token'),
};

const mutations = {
  LOGIN_USER() {
    state.isLogged = true;
  },
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
});
