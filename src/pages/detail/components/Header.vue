<template>
  <div>
    <div class="header-abs" v-show="showABS">
      <router-link class="iconfont abs-icon" tag="div" to="/">&#xe624;</router-link>
    </div>
    <div class="header-fixed" v-show="!showABS" :style="opacityShow">
      景点详情
      <router-link to="/">
        <div class="iconfont fixed-icon">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showABS: true,
      opacityShow: 0
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 50) {
        let opacity = top / 120
        opacity = opacity > 1 ? 1 : opacity
        this.opacityShow = {
          opacity: opacity
        }
        this.showABS = false
      } else {
        this.showABS = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll) // 会影响其他页面，不推荐用，需要解绑
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll) // 解绑全局事件
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  .header-abs
    position :absolute
    left :0.2rem
    top :0.2rem
    width :0.8rem
    height :0.8rem
    border-radius :0.4rem
    text-align :center
    line-height :0.8rem
    background :rgba(0, 0, 0, 0.8)
    .abs-icon
      color :white
      font-size :0.4rem
  .header-fixed
    height :$headerHeight
    line-height :$headerHeight
    text-align :center
    color :white
    background :$bgColor
    font-size :0.32rem
    position :fixed
    top :0
    left :0
    right :0
    z-index :2
    .fixed-icon
      position :absolute
      top :0
      left :0
      text-align :center
      width :0.64rem
      color :white
</style>
