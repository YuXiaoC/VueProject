<template>
  <div class="hello">
    <ul>
      <li v-for="item in list" :key="item.id">
            <img :src="item.img" alt="">
      </li>
    </ul>
    <!-- <div v-for="item in list" :key="item.id">
      <img :src="item.img" alt="">
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          img:'../HomeImages/1.jpg',
          id:1
        },
        {
         img:'../HomeImages/2.jpg',
          id:2
        },
        {
          img:'../HomeImages/3.jpg',
          id:3
        }
      ]
    };
  }
};
</script>

<style scoped>
 ul li {
   list-style: none;
 }
 ul li img{
   width: 100px;
   height: 200px;
 }
</style>
