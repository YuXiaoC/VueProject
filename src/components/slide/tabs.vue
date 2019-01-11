<template>
  <div class="tabBox">
    <mt-navbar v-model="selected">
      <mt-tab-item v-for="item in tabsType" :id="item.id" :key="item.id" @click.native="change(item.component)">{{item.title}}</mt-tab-item>
    </mt-navbar>
     <components :is="current"></components>
  </div>
</template>

<script>
import tabsList1 from './tabsList1.vue';
import tabsList2 from './tabsList2.vue';
import tabsList3 from './tabsList3.vue';
export default {
  data() {
    return {
        tabsType:[
            {
                id:'1',
                title:'女士',
                component:tabsList1
            },
            {
                id:'2',
                title:'男士',
                component:tabsList2
            },
            {
                id:'3',
                title:'儿童',
               component:tabsList3
            },
        ],
         selected: "1",
         current:tabsList1,
    };
  },
   methods:{
        change(component){
            this.current = component;
            // console.log(component);
        }
    }
//   components:{
//       tabsList
//   }
};
</script>

<style scoped>
.tabBox {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #222;
}

</style>

