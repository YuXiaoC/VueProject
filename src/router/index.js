import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Search from '@/components/Search';
import Womenc from '@/components/Searchlist/Womenc';
import Menc from '@/components/Searchlist/Menc';
import Childrenc from '@/components/Searchlist/Childrenc';
import Cart from '@/components/Cart';
import Slider from '@/components/slider';
import Detailpage from '@/components/Detailpage';
import List from '@/components/list';
import '@/App';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },

    {
      //		name:'Search',
      path: '/search',
      component: Search,
      children: [{
          path: '', //默认子路由
          redirect: {
            name: 'Womenc'
          }
        },
        {
          path: 'womenc',
          name: 'Womenc',
          component: Womenc
        },
        {
          path: 'menc',
          name: 'Menc',
          component: Menc
        },
        {
          path: 'childrenc',
          name: 'Childrenc',
          component: Childrenc
        }
      ]

    },
    {
      name: 'Cart',
      path: '/cart',
      component: Cart,
    },
    {
      path:'/slider',
      component:Slider
    },
     {
      name: 'Detailpage',
      path: '/detailpage/:id',
      component: Detailpage,
    },
     {
      name: 'List',
      path: '/list',
      component: List,
    }
  ]
});
