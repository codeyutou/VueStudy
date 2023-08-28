<template>
  <div>
    <li>
      <label>
        <input type="checkbox" :checked="todo.done" @click="checktodo(todo.id)"/>
        <span>{{todo.title}}</span>
      </label>
      <button class="btn btn-danger" @click="deletetodo(todo.id)" >删除</button>
    </li>
   
  </div>
</template>

<script>
export default {
    name:'MyItem',
  props: ['todo'],
  methods:{
      checktodo(id){
        console.log(id)
          this.$bus.$emit('checktodos',id)
      },
      deletetodo(id){
        if(confirm("是否确定删除")){
          this.$bus.$emit('deletetodos',id)
        }
      }
  }
};
</script>

<style>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>