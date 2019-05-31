<template>
    <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page,index) of pages" :key="index">
          <div class="icon" v-for="item of page" :key="item.id">
            <div class="icon-img">
              <img class="icon-img-content" :src="item.imgUrl">
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  props: {
    iconList: Array
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        } else {
          console.log(pages[page])
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
  .icons >>> .swiper-container
    // width :100%
    // height :0
    // padding-bottom :50%
    // overflow :hidden
    height :0
    padding-bottom :50%
  .icon
    width: 25%
    position :relative
    overflow :hidden
    float: left
    height :0
    padding-bottom :25%
    .icon-img
      position :absolute
      top :0
      left :0
      right :0
      bottom :0.44rem
      box-sizing :border-box
      padding :0.1rem
    .icon-img-content
      height :100%
      display :block
      margin :0 auto
    .icon-desc
      position :absolute
      left :0
      right :0
      bottom :0
      line-height :0.44rem
      height :0.44rem
      text-align :center
      color :$darkTextColor
      overflow :hidden
      white-space :nowrap
      text-overflow :ellipsis
</style>
