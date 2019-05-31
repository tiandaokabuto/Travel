<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>
<style lang="stylus" scoped>
  @import "../../../assets/styles/mixins.styl"
  .recommend-title
    line-height :0.8rem
    background :#ccc
    text-indent :0.2rem
  .item-img-wrapper
    padding-bottom :37.09%
    height :0
    overflow :hidden
    .item-img
      width :100%
  .item-info
    padding :0.1rem
    .item-title
      line-height :0.54rem
      font-size :0.32rem
      ellipsis()
    .item-desc
      line-height :0.4rem
      color :#ccc
      ellipsis()
</style>
