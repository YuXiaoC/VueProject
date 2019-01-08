<template>
  <div class="hello">
    <mytop></mytop>
    <div v-for="item in list" :key="item.id" class="imgbox">
      <img :src="item.url">
    </div>
  </div>
</template>

<script>
import mytop from './public/Header.vue';
export default {
  data() {
    return {
      list: [
        { url: require("@/HomeImages/1.jpg"), id: 1 },
        { url: require("@/HomeImages/2.jpg"), id: 2 },
        { url: require("@/HomeImages/3.jpg"), id: 3 }
      ]
    };
  },
   components:{
      mytop
    }
};
</script>

<style>
ul li {
  list-style: none;
}
.imgbox img {
  width: 100%;
  height: 400px;
}
</style>
