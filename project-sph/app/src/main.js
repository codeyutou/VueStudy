import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router'
import TypeNav from '@/components/TypeNav'
Vue.config.productionTip = false
import {requestCategoryList,requestText,requestSearchInfo} from '@/api'
//引入store
import store from '../store'
Vue.component(TypeNav.name,TypeNav)
import '@/mock/mockServe'
import 'swiper/css/swiper.css'
requestCategoryList();
requestText();
let params={
  "category3Id": "61",
  "categoryName": "手机",
  // "keyword": "小米",
  // "order": "1:desc",
  // "pageNo": 1,
  // "pageSize": 10,
  // "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  // "trademark": "4:小米"
}

//requestSearchInfo(params);
new Vue({
  render: h => h(App),
  store,
  beforeCreate(){
		Vue.prototype.$bus=this
	},
  //注册路由
  router
}).$mount('#app')
