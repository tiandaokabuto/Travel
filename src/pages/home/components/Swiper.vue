<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" >
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  },
  props: {
    swiperList: Array
  }
}
</script>
<style lang="stylus" scope>
.wrapper {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 25.6%;
}

.swiper-img {
  width: 100%;
}
</style>
