<template>
  <div class="slideBox">
    <Tabs></Tabs>
  </div>
</template>

<script>
import Tabs from "./slide/tabs";
export default {
  data() {
    return {};
  },
  components: {
    Tabs
  }
};
</script>
<style lang="scss">
.slideBox {
  height: 100%;
  // .tabBox {
  //   display: flex;
  //   flex-direction: column;
  //   width: 100%;
  //   height: 100%;
  //   .mint-navbar {
  //     width: 100%;
  //     // height: 100%;
  //     background: #222;
  //   }
  // }
}
</style>
