<template>
  <div class="ListBox">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <mt-cell title="儿童"/>
        <mt-cell v-for="item in tabList" :title="item.title" :key="item.id">
             <myicons name="chevron-right"></myicons>
        </mt-cell>
        <router-view></router-view>
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
          title: "儿童1"
        },
        {
          id: 2,
          title: "儿童2"
        },
        {
          id: 3,
          title: "儿童3"
        },
        {
          id: 4,
          title: "儿童4"
        },
        {
          id: 5,
          title: "儿童5"
        }
      ],
      selected:'1'
    };
  }
};
</script>

<style>
.mint-cell{
  border-bottom:1px solid #ccc;
}
</style>
