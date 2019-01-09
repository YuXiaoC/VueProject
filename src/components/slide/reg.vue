<template>
  <div class="mine">
    <p>我的账户</p>
    <div>
      <mt-button type="primary">登陆</mt-button>
      <br>
      <mt-button type="default">注册</mt-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.mine{
    margin-top: 60px; 
}
.mine div{
    text-align: center;
}
.mine div button{
    margin-top: 20px;
    width: 50%;
}
.mine p{
    font-size: 20px;
    text-align: center;
}
</style>
