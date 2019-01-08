import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Search from '@/components/Search';
		import Womenc from '@/components/Searchlist/Womenc';
		import Menc from '@/components/Searchlist/Menc';
		import Childrenc from '@/components/Searchlist/Childrenc';
			
import '@/App';

Vue.use(Router);

export default new Router({
routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    
    {
//		name:'Search',
		path:'/search',
		component:Search,
		 children:[
        {
          path:'',//默认子路由
          redirect:{name:'Womenc'}
        },
        {
          path:'womenc',
          name:'Womenc',
          component:Womenc
        },
        {
          path:'menc',
          name:'Menc',
          component:Menc
        },
      	  {
          path:'childrenc',
          name:'Childrenc',
          component:Childrenc
        }
      ]
		
	}
]
});

//const routes=[
//	 {
//    path: '/',
//    name: 'Home',
//    component: Home
//  },
//  {
//		name:'Search',
//		path:'/search',
//		component:Search,
//		props:true
//	}
//];
//
//
//let router =new Router({
//	 routes
// });
//
//export default router;


