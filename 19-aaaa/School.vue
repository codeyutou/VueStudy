<template>
  <div class="demo">
      <h2>欢迎来到{{name}}</h2>
      <h3>位置{{address}}</h3>
  </div>
</template>

<script>
    export default {
        name:'School',
        data:{
            name:'北京化工',
            address:'北三环东路15号'
        }
    }
</script>

<style>
    .demo{
        background-color: green;
    }
</style>