//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
//引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Rigister from '@/pages/Rigister'
import Search from '@/pages/Search'

//先把VueRouter原型对象的push保存一份
const originPush=VueRouter.prototype.push;
VueRouter.prototype.push=function(location,resolve,reject){
   // console.log(resolve,"ccccc",reject)
    if(resolve && reject){
      //  console.log(resolve,"aaaa",reject)
        originPush.call(this,location,resolve,reject)
    }else{
    //    console.log(resolve,"bbbb",reject)
        originPush.call(this,location,()=>{},()=>{})
    }
}
Vue.use(VueRouter)

export default new VueRouter({
    //配置路由
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{
                show:true
            }
        },
        {
            path:"/login",
            component:Login,
            meta:{
                show:false
            }
        },
        {
            path:"/rigister",
            component:Rigister,
            meta:{
                show:false
            }
        },
        {
            path:"/search/:keyword?",
            component:Search,
            name:'search',
            meta:{
                show:true
            }
        },
        //重定向
        {
            path:"*",
            //redirect: '/home' ,
            component:Home,
            meta:{
                show:true
            }
        }
    ]
})