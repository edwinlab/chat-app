<template>
<div class="text">
    <textarea placeholder="Ctrl + Enter" v-model="content" @keyup="onKeyup"></textarea>
</div>
</template>

<script>
import store from '@/store';

export default {
  data() {
    return {
      content: '',
    };
  },
  methods: {
    onKeyup(e) {
      if (e.ctrlKey && e.keyCode === 13 && this.content.length) {
        this.sendMessage(this.content);
        this.content = '';
      }
    },
    sendMessage(content) {
      store.commit('SOCKET_MESSAGE', content);
      this.$socket.emit('sendMessage', content);
    },
  },
};
</script>

<style lang="less" scoped>
.text {
    height: 70px;
    border-top: solid 1px #ddd;

    textarea {
        padding: 10px;
        height: 100%;
        width: 100%;
        border: none;
        outline: none;
        font-family: "Micrsofot Yahei";
        resize: none;
    }
}
</style>