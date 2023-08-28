<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div id="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <MyHeader :addtodos='addtodos'/>
          <MyList :todos='todos'/>
          <MyFooter :todos='todos' @checkAllTodo='checkAllTodo' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";
import MyFooter from "./components/MyFooter.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    MyHeader,
    MyList,
    MyFooter,
  },
  data() {
    return {
      todos: [{ id: "001", title: "学习", done: false }],
    };
  },
  methods:{
    addtodos(NewTodo){
      this.todos.unshift(NewTodo)
    },
    checktodos(id){
      console.log('app'+id)
      this.todos.forEach((todo)=>{
        if(todo.id==id) todo.done=!todo.done
      })
    },
    deletetodos(id){
    this.todos=this.todos.filter((todo)=>todo.id!=id)
    },
    checkAllTodo(value){
      console.log('check+'+value)
      this.todos.forEach((todo)=> todo.done=value
     )

    }
  },
  mounted(){
    this.$bus.$on('checktodos',this.checktodos)
    this.$bus.$on('deletetodos',this.deletetodos)
  },
  beforeDestroy(){
     this.$bus.$off('checktodos')
     this.$bus.$off('deletetodos')
  }

};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
