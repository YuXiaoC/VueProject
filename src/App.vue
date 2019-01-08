<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

import Vue from 'vue';
import axios from 'axios';
Vue.prototype.$axios = axios;//将axios写入Vue原型对象，方便后面使用
export default {
 
};
</script>

<style>
*{
  padding: 0;
  margin: 0;
}


</style>
