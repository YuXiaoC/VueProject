<template>
  <div id="app">
    <mt-header title="FARFETCH">
      <router-link to="/" slot="left" class="more">
        <myicons name="three-bars" class="three-bars"></myicons>
      </router-link>
       <router-link to="/search" slot="left" class="search" @click.native="goto('search')">
          <myicons name="search"></myicons>
       </router-link>
      <!-- <mt-button icon="more" slot="right" class=""></mt-button> -->
       <router-link to="/" slot="right">
          <myicons name="star" class="star"></myicons>
          <myicons name="heart" class="heart"></myicons>
       </router-link>
    </mt-header>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue';
import MintUI from 'mint-ui';//引入mint-ui插件
Vue.use(MintUI);
import 'mint-ui/lib/style.css';//引入mint-ui插件样式
import axios from 'axios';
Vue.prototype.$axios = axios;//将axios写入Vue原型对象，方便后面使用
import myicons from '@/plugins/icons.js';//引入我们自定义图标组件
Vue.use(myicons);
export default {
  // name: "App"
  	methods:{
  			goto(name){
  				console.log(name);
  				
//				this.$router.pull({name});
  			}
  	}
};
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app .more,.search,.star{
  float: left;
  fill: azure;
}
#app .search ,.star{
  margin-left: 20px;
}
#app .heart{
  fill: azure;
}
#app .mint-header-title{
  font-weight: 600;
  font-size: 23px;
}

</style>
