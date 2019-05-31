<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe7b3;</span>
            {{this.Imgs.length}}
        </div>
      </div>
    </div>
    <fade>
      <common-gallary :imgs="Imgs" v-show="showFlag" @gallaryClose="gallaryClose"></common-gallary>
    </fade>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import Fade from 'common/fade/Fade'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showFlag: false
    }
  },
  props: {
    Imgs: Array,
    bannerImg: String,
    sightName: String
  },
  methods: {
    handleBannerClick () {
      this.showFlag = true
    },
    gallaryClose () {
      this.showFlag = false
    }
  },
  components: {
    CommonGallary,
    Fade
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position :relative
    color :white
    overflow :hidden
    height :0
    padding-bottom :55%
    .banner-img
      width: 100%
    .banner-info
      display :flex
      position :absolute
      left :0
      right :0
      bottom :0
      line-height :0.6rem
      background-image :linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex :1
        font-size :0.32rem
        padding :0 0.2rem
      .banner-number
        padding :0 0.4rem
        line-height :0.32rem
        height :0.32rem
        border-radius :0.2rem
        background :rgba(0, 0, 0, 0.8)
        font-size :0.24rem
        margin-top :0.16rem
        .banner-icon
          font-size :0.24rem
</style>
