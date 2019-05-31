<template>
  <div id="app">
    <!-- 当前路由地址所对应的内容 -->
    <!-- 使用exclude之后 隐藏顶栏效果失效-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
