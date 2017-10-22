/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  isLogged: !!localStorage.getItem('token'),
  connect: false,
  username: localStorage.getItem('username'),
  messages: [],
};

const mutations = {
  LOGIN_USER() {
    state.isLogged = true;
  },
  SOCKET_CONNECT: () => {
    state.connect = true;
  },
  SOCKET_MESSAGE: (state, message) => {
    state.messages.push(message);
  },
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state,
  mutations,
});
