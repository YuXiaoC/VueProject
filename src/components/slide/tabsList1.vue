<template>
  <div class="ListBox">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell title="女士首页"/>
        <mt-cell v-for="item in tabList" :title="item.title" :key="item.id">
              <keep-alive>
             <myicons name="chevron-right"></myicons>
             </keep-alive>
        </mt-cell>
        <!-- <router-view></router-view> -->
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabList: [
        {
          id: 1,
          title: "选项1"
        },
        {
          id: 2,
          title: "选项2"
        },
        {
          id: 3,
          title: "选项3"
        },
        {
          id: 4,
          title: "选项4"
        },
        {
          id: 5,
          title: "选项5"
        }
      ],
      selected:'1'
    };
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
