<template>
  <div class="ListBox">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell title="男士首页"/>
        <mt-cell v-for="item in tabList" :title="item.title" :key="item.id">
             <myicons name="chevron-right"></myicons>
        </mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
    <Reg></Reg>
  </div>
</template>

<script>
import Reg from "./reg";
export default {
  data() {
    return {
      tabList: [
        {
          id: 1,
          title: "男士1"
        },
        {
          id: 2,
          title: "男士2"
        },
        {
          id: 3,
          title: "男士3"
        },
        {
          id: 4,
          title: "男士4"
        },
        {
          id: 5,
          title: "男士5"
        },
        {
          id: 6,
          title: "男士6"
        },
        {
          id: 7,
          title: "男士7"
        },
        {
          id: 8,
          title: "男士8"
        },
        {
          id: 9,
          title: "男士8"
        },
        {
          id: 10,
          title: "男士8"
        },
      ],
      selected:'1'
    };
  },
  components:{
    Reg
  }
};
</script>

<style scoped>
.mint-cell{
  border-bottom:1px solid #ccc;
}
.tabBox .mint-navbar .mint-tab-item .mint-tab-item-label{
    font-size: 14px;
}
.mint-cell-wrapper .mint-cell-value{
   fill: #ccc; 
}
</style>