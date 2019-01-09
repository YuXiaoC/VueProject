<template>
  <div id="app">
    <transition>
      <router-view/>
    </transition>
  </div>
</template> 

<script>
import Vue from "vue";
import axios from "axios";
Vue.prototype.$axios = axios; //将axios写入Vue原型对象，方便后面使用
export default {
  // props: ["name"],
  // data: {
  //   isSlide: false
  // },
  // methods: {
  //   slide() {}
  // }
};
</script>

<style>

*{
  padding: 0;
  margin: 0;
}
 html,body,#app{	
    	height: 100%;
		width: 100%;
}

#app >div{
  overflow:hidden;
}
/* .swiper {
  position: absolute;
  left: 300px;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter,
.slide-leave {
  transition: all;
} */
</style>
