<template>
  <div class="nav">
    <!-- <slot></slot>  -->
    <router-link  to="/">
      <mt-header title="FARFETCH">
        <router-link to="/slider" slot="left" class="more">
          <myicons name="three-bars" class="three-bars"></myicons>
        </router-link>
        <router-link to="/search" slot="left" class="search">
          <myicons name="search"></myicons>
        </router-link>
        <!-- <mt-button icon="more" slot="right" class=""></mt-button> -->
        <router-link to="/cart" slot="right">
          <myicons name="star" class="star"></myicons>
          <myicons name="heart" class="heart"></myicons>
        </router-link>
      </mt-header>
    </router-link>
  </div>
</template>
<script>
import Vue from "vue";
import MintUI from "mint-ui"; //引入mint-ui插件
Vue.use(MintUI);
import "mint-ui/lib/style.css"; //引入mint-ui插件样式
import myicons from "@/plugins/icons.js"; //引入我们自定义图标组件
Vue.use(myicons);
export default {
  created() {
    console.log(666);
  }
};
</script>
<style>
.nav .more,
.search,
.star {
  float: left;
  fill: azure;
}
.nav .search,
.star {
  margin-left: 20px;
}
.nav .heart {
  fill: azure;
}
.nav .mint-header-title {
  font-weight: 600;
  font-size: 23px;
}
.nav .router-link-active {
 text-decoration: none;
}
</style>
