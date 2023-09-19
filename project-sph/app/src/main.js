import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router'
import TypeNav from '@/components/TypeNav'
Vue.config.productionTip = false
import {requestCategoryList,requestText} from '@/api'
//引入store
import store from '../store'
Vue.component(TypeNav.name,TypeNav)
import '@/mock/mockServe'
import 'swiper/css/swiper.css'
requestCategoryList();
requestText();

new Vue({
  render: h => h(App),
  store,
  //注册路由
  router
}).$mount('#app')
