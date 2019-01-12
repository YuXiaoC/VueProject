<template>
  <div id="app" :class="{isHidden:isPosit}">
    <div class="home" @click="homeC" :class="{posit:isPosit}">
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
    <div class="slide" v-show="isShow">
      <slider></slider>
    </div>
  </div>
</template> 

<script>
import slider from './components/slider'
import Vue from "vue";
import Vuex,{ mapState } from "vuex";
import "animate.css";
import axios from "axios";
Vue.prototype.$axios = axios; //将axios写入Vue原型对象，方便后面使用
export default {
  props: ["posit"],
  data(){
    return{
      // isShow: false,
      // isPosit:this.$store.state.isPosit,
      // isPosit:true,
    }
  },
  computed:{
      isPosit(){
        return this.$store.state.isPosit
      },
      isShow(){
        return this.$store.state.isPosit
      }
  },
  methods: {
    homeC() {
      // if(this.isPosit){
      //   this.$store.commit('changeIsPosit');
      //   console.log(this.$store.state.isPosit,this.isPosit)
      // }
      
    }
  },
  components: {
    slider
  },
//  mounted(){
//    console.log(this.$store.state.isPosit);
//  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
html,
body{
  height: 100%;
  /* overflow-y: scroll; */
  /* overflow: hidden; */
}
#app {
  position: relative;
  height: 100%;
  width: 100%;
}
.isHidden{
  overflow-x: hidden;
}
#app > .posit {
  overflow: hidden;
  z-index: 3;
  position: absolute;
  left: 330px;
  width: 100%;
  height: auto;
}
#app > .home .hello .picBox .imgbox img{
  width: 100%;
}
#app > .slide{
  height: 100%;
  width: 85%;
}
#app > .slide .slideBox{
  position: relative;
  height: 100%;
  width: 100%;
}
#app > .slide .tabBox{
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  width: 100%;
  height: 100%;
  /* position: absolute; */
}
#app > .slide .tabBox .mint-navbar{
  /* position: fixed; */
  height:40px;
}
#app > .slide .tabBox .ListBox{
  overflow: hidden;
   overflow-y: scroll;
  flex: 1;
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
