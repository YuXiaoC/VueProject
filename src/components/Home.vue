<template>
  <div class="hello">
    <mytop @clickMove="fnClick"></mytop>
    <!-- <button :handleSlide="slide">点击滑动</button> -->
    <div class="picBox">
      <div class="pic1">
        <img src="@/HomeImages/1.jpg">
        <div class="msg">
          <p>SALE</p>
          <p>年度优惠惊喜升级.3000多件单品现享3折</p>
        </div>
      </div>
      <div v-for="item in list" :key="item.id" class="imgbox">
        <img :src="item.url">
      </div>
    </div>
    <div id="footer">
      <ul>
        <li>
          <div class="iconBox">
            <myicons name="file-submodule" class="question"></myicons>
          </div>
          <span>如何购物</span>
        </li>
        <li>
          <div class="iconBox">
            <myicons name="question" class="question"></myicons>
          </div>
          <span>常见问题</span>
        </li>
        <li>
          <div class="iconBox">
            <myicons name="comment" class="question"></myicons>
          </div>
          <span>需要帮助</span>
        </li>
      </ul>
      <div class="footerList"></div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import "animate.css";
import myicons from "@/plugins/icons.js"; //引入我们自定义图标组件
Vue.use(myicons);
import mytop from "./public/Header.vue";
export default {
  // props:{
  //   type:Function,
  //   handleSlide
  // },
  data() {
    return {
      list: [
        { url: require("@/HomeImages/H-Image4.jpg"), id: 1 },
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

.pic1 {
  position: relative;
  .msg {
    height: 25%;
    width: 80%;
    background-color: hsla(0, 0%, 100%, 0.85);
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    p {
      margin: 10px 0;
      text-align: center;
      font-size: 23px;
      color: #222;
      font-weight: 600;
    }
  }
}
#footer {
  width: 100%;
  height: 30%;
  background: #222;
  overflow: hidden;
  ul {
    width: 100%;
    height: 30%;
    overflow: hidden;
    li {
      width: 33%;
      height: 100px;
      text-align: center;
      color: azure;
      float: left;
      .question {
        fill: azure;
        .octicon .octicon-question {
          width: 30px;
          height: 30px;
        }
      }
      .iconBox {
        margin: 20px 0 10px 0;
      }
    }
  }
}
</style>
