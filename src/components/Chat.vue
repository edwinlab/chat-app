<template>
<div id="app">
    <div class="sidebar">
        <list></list>
    </div>
    <div class="main">
        <message></message>
        <text-form></text-form>
    </div>
</div>
</template>

<script>
import List from '@/components/List';
import TextForm from '@/components/TextForm';
import Message from '@/components/Message';
import store from '@/store';
import router from '@/router';

export default {
  beforeCreate() {
    if (!store.state.isLogged) {
      router.push('/');
    }
    if (store.state.isLogged) {
      this.$socket.emit('userLogin', store.state.username);
    }
  },
  sockets: {
    newMessage(res) {
      if (res.username !== store.state.username) {
        store.commit('SOCKET_MESSAGE', res.message);
      }
    },
  },
  components: { List, TextForm, Message },
};
</script>

<style lang="less" scoped>
#app {
    margin: 20px auto;
    width: 800px;
    height: 600px;

    overflow: hidden;
    border-radius: 3px;

    .sidebar, .main {
        height: 100%;
    }
    .sidebar {
        float: left;
        width: 200px;
        color: #f4f4f4;
        background-color: #2e3238;
    }
    .main {
        position: relative;
        overflow: hidden;
        background-color: #eee;
    }
    .text {
        position: absolute;
        width: 100%;
        bottom: 0;
        left: 0;
    }
    .message {
        height: ~'calc(100% - 70px)';
    }
}
</style>
