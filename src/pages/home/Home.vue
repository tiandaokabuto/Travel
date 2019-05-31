<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recomend :recommendList="recommendList"></home-recomend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecomend from './components/Recomend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper,
    HomeIcons: HomeIcons,
    HomeRecomend: HomeRecomend,
    HomeWeekend: HomeWeekend
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      if (res.data.ret && res.data.data) {
        const data = res.data.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  //  生命周期函数
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () { // 使用keep-alive的时候多出一个生命周期函数
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
<style>
</style>
