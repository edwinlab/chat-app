<template>
  <div class="login">
    <form method="post" action="index.html">
    <div class="box">
      <h1>Dashboard</h1>
      <input type="email" name="email" value="email" class="email" />
      <input type="password" name="email" value="email" class="email" />
      <router-link to="chat"><div class="btn">Sign In</div></router-link>
    </div> <!-- End Box -->

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
    padding:10px 10px 70px 20px;
  }

  .email{
    background:#ecf0f1;
    border: #ccc 1px solid;
    border-bottom: #ccc 2px solid;
    padding: 8px;
    width:250px;
    color:#AAAAAA;
    margin-top:10px;
    font-size:1em;
    border-radius:4px;
  }

  .password{
    border-radius:4px;
    background:#ecf0f1;
    border: #ccc 1px solid;
    padding: 8px;
    width:250px;
    font-size:1em;
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
    margin-right:20px;
    padding-left: 10px;
    font-weight:800;
    font-size:0.8em;
  }

  .btn:hover{
    background:#2CC06B;
  }
}
</style>
