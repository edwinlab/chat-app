// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import socketio from 'socket.io-client';
import VueSocketIO from 'vue-socket.io';

import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const SocketInstance = socketio('https://oy-chat-api.herokuapp.com');

Vue.use(VueSocketIO, SocketInstance, store);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
