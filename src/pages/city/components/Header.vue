<template>

  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  .header
    height :$headerHeight
    line-height :$headerHeight
    overflow :hidden
    text-align :center
    color :white
    background :$bgColor
    font-size :0.32rem
    .back-icon
      position :absolute
      top :0
      left :0
      text-align :center
      width :0.64rem
      color :white
</style>
