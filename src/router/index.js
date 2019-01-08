import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Search from '@/components/Search';
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
		name:'Search',
		path:'/search',
		component:Search,
		props:true
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


