<template>
  <div id="app">
       <Header/>
       <!-- 路由 -->
       <router-view></router-view>
       <Footer v-show="$route.meta.show"/> 
       <button @click="getStudent">获取学生信息</button>
          <button @click="getCar">获取汽车信息</button>
          <button @click="addCount">addCount</button>
          <button @click="getCar">获取汽车信息</button>
          <h2>{{count}}</h2>
  </div>
</template>

<script>
import {requestCategoryList,requestText} from '@/api'
import {mapState} from 'vuex'
import Header from './components/Header/Header.vue'
import Footer from './components/Footer/Footer.vue'
import axios from "axios";
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
   methods: {
    getStudent() {
      axios.get("http://localhost:8081/Text/students").then(
        (response) => {
          console.log(response.data);
        },
        (error) => {
          console.log(error.message);
        }
      );
    },
    getCar() {
      requestText()
    },
    addCount(){
      this.$store.dispatch('home/addCount',1)
    }
 
  },
  computed:{
    ...mapState('home',['count'])
  },
  mounted(){
    this.$store.dispatch("home/requestCategoryList");
  }
}
</script>

<style>

</style>
