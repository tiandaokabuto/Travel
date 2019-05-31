<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
        输入城市景点
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}} <!-- 使用公用数据store里面的city -->
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']) // 把vuex中的city映射到这里的city中，可以取代{{this.$store.state.city}}
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
  .header
    display: flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        font-size: .4rem
        text-align : center
    .header-input
      flex: 1
      padding-left: .2rem
      height : .64rem
      line-height : .64rem
      margin-top : .12rem
      margin-left : .2rem
      background : #ffffff
      color :#ccc
      border-radius: .1rem
    .header-right
      min-width: 1.04rem
      padding :0 0.1rem
      float: right
      text-align : center
      color: white
      .arrow-icon
        font-size: .24rem
</style>
