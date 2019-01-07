/*
    Vue插件的编号
        *对象
            *install方法
        *函数    
*/

//使用插件
// Vue.use(插件);
// 写法一：插件写成对象形式，必须要有一个install方法
// let myPlugin = {
//     install(){

//     }
// }

// 写法二：插件写成函数形式，它自身就是install方法
// let myPlugin = function(参数一，参数二){}--参数一是vue
// let myPlugin = function(Vue){
    //插件一般有哪些类型
    //1、全局方法Vue.xx()
    // 2、全局资源

// }
import icons from 'octicons';
// console.log(icons.alert.toSVG);
export default {
    install(Vue,options){
        Vue.component('myicons',{
            props:{
                name:{
                    type:String,
                    required:true
                }
            },
            computed:{
                svg(){
                    return icons[this.name].toSVG();
                }
            },
            template:`<div v-html="svg"></div>`
        })
    }
}
