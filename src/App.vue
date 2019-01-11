<template>
  <div id="app">
    <div class="home">
      <transition
        name="slide"
        enter-active-class="animated"
        enter-class="slideInRight"
        enter-to-class
        leave-active-class="animated"
        leave-to-class="leaveOutRight"
      >
        <router-view/>
      </transition>
    </div>
    <div class="slide">
      <slider></slider>
    </div>
  </div>
</template> 

<script>
import slider from './components/slider'
import Vue from "vue";
import "animate.css";
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
  components: {
    slider
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  position: relative;
  height: 100%;
  width: 100%;
}

#app > .home {
  overflow: hidden;
  z-index: 3;
  position: absolute;
  left: 330px;
  width: 100%;
  height: 100%;
}
#app > .home .hello{
  height: 100%;
}
#app > .slide{
  width: 85%;
}
#app > .slide .slideBox{
  position: relative;
  width: 100%;
}
#app > .slide .tabBox .ListBox{
  overflow-x: hidden;
  
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter,
.slide-leave {
  transition: all;
}
</style>
