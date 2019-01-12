<template>
  <div class="hello">
    <mytop @clickMove="fnClick"></mytop>
    <!-- <button :handleSlide="slide">点击滑动</button> -->
    <div v-for="item in list" :key="item.id" class="imgbox">
      <img :src="item.url">
    </div>
  </div>
</template>

<script>
import 'animate.css';
import mytop from './public/Header.vue';
export default {
  // props:{
  //   type:Function,
  //   handleSlide
  // },
  data() {
    return {
      list: [
        { url: require("@/HomeImages/1.jpg"), id: 1 },
        { url: require("@/HomeImages/2.jpg"), id: 2 },
        { url: require("@/HomeImages/3.jpg"), id: 3 }
      ],
    };
  },
  methods:{
    fnClick(){
      console.log(this.$store.state.isPosit);
      // this.$emit('homeSlide');
    }
  },
  components: {
    mytop
  }
};
</script>

<style scoped lang="scss">
body {
  #app {
    .home {
      overflow: hidden;
      width: 100%;
      .hello {
         height: 100%;
         position: relative;
         overflow: hidden;
        .nav {
          width: 100%;
          top: 0;
          left: 0;
          z-index: 2;
          position: fixed;
          a {
            .mint-header {
              height: 100%;
            }
          }
        }
        .picBox {
          height: 100%;
          overflow: hidden;
          margin-top: 10%;
          .pic1 {
           
            img { height: 30%;
              width: 100%;
            }
          }
          .imgbox {
            margin: 20px 0;
            img {
              display: block;
              width: 100%;
              height: 40%;
            }
          }
        }
      }
    }
  }
}

ul li {
  list-style: none;
}
.imgbox img {
  width: 100%;
  height: 400px;
}
</style>
