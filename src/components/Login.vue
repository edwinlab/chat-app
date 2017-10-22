<script>
    import axios from 'axios';
    import router from '@/router';
    import store from '@/store';

    export default {
      name: 'Login',

      data() {
        return {
          infoError: false,
          errors: [],
          username: '',
          password: '',
        };
      },

      beforeCreate() {
        if (store.state.isLogged) {
          router.push('/chat');
        }
      },

      methods: {
        login() {
          this.infoError = false;
          axios.post('https://oy-chat-api.herokuapp.com/login', {
            username: this.username,
            password: this.password,
          }).then((response) => {
            localStorage.setItem('token', response.data.user.token);
            store.commit('LOGIN_USER');
            localStorage.setItem('username', response.data.user.username);
            router.push('/chat');
          })
          .catch((e) => {
            this.errors.push(e);
            this.infoError = true;
          });
        },
      },
    };
</script>

<template>
  <div class="login">
    <form>
      <div class="box">
        <div class="info info-error" v-if="infoError">Login failed. Please try again.</div>
        <input type="input" v-model.trim="username" name="username" placeholder="username" class="input" />
        <input type="password" v-model.trim="password" name="password" placeholder="password" class="input" />
        <a href="javascript:void(0)" type="submit" class="btn" v-on:click.prevent="login">Sign In</a>
      </div>
    </form>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.login {
  margin-top: 50px;
  .box{
    background:white;
    width:300px;
    border-radius:6px;
    margin: 0 auto 0 auto;
    padding:20px 20px 70px 20px;
  }

  .input{
    background:#ecf0f1;
    border: #ccc 1px solid;
    padding: 8px;
    width:250px;
    color:#AAAAAA;
    margin-top:10px;
    font-size:1em;
    border-radius:4px;
  }

  .btn{
    background:#2ecc71;
    width:125px;
    padding-top:5px;
    padding-bottom:5px;
    color:white;
    border-radius:4px;
    border: #27ae60 1px solid;

    margin-top:20px;
    margin-bottom:20px;
    float:right;
    margin-right:10px;
    padding-left: 10px;
    font-weight:800;
    font-size:0.8em;
    text-decoration: none;
  }

  .btn:hover{
    background:#2CC06B;
  }
}
</style>
