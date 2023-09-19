<template>
  <div>
    <TypeNav/>
      我是搜索
      <h2>param参数{{$route.params.keyword}}</h2>
      <h2>query参数{{$route.query.category1id}}</h2>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>