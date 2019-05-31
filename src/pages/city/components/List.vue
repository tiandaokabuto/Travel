<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <ul class="button-list">
          <li class="button btn-tr3">{{this.$store.state.city}}</li>
        </ul>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <ul class="button-list">
          <li class="button btn-tr3" v-for="hot
          of hotCityList" :key="hot.id" @click="handleCityClick(hot.name)">{{hot.name}}</li>
        </ul>
      </div>
      <div class="area">
        <div class="title border-topbottom">字母排序</div>
        <ul class="button-list">
          <li class="button btn-tr6" v-for="charitem of charList" :key="charitem">{{charitem}}</li>
        </ul>
      </div>
      <div class="area"  v-for="(item,key) of cities" :key="key"
      :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <ul class="button-list">
          <li class="button btn-tr4" v-for="inneritem of item" :key="inneritem.id"
          @click="handleCityClick(inneritem.name)">{{inneritem.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex' // 注意加大括号
export default {
  name: 'CityList',
  props: {
    charList: Array,
    hotCityList: Array,
    cities: Object,
    letter: String
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)// 未生效
  },
  watch: {
    letter () { // 监听letter变化就触发
      console.log(this.letter)
      if (this.letter) {
        const ele = this.$refs[this.letter][0] // $refs可以获取绑定ref的DOM元素
        this.scroll.scrollToElement(ele) // better-scroll提供的接口
      }
    }
  },
  methods: {
    handleCityClick (name) {
      // this.$store.dispatch('changeCity', name) 不需要异步，直接调用commit ↓
      // this.$store.commit('changeCity', name)
      this.changeCity(name)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  .border-topbottom
    &:before
      border-color :#ccc
    &:after
      border-color :#ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.78rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height :0.54rem
      background :#eee
      color :#666
      padding-left :0.2rem
      font-size :0.26rem
    .button-list
      position: relative
      overflow: hidden
      z-index: 0
      background-color: #fff
      .button
        width: 25%
        height: .9rem
        line-height: .9rem
        font-size: .28rem
        text-align: center
        border-bottom  :0.01rem solid #ddd
        margin-bottom: -1px
        float: left
        position: relative
        z-index: 10
        color: #212121
      .btn-tr3
        width: 33.33%
      .btn-tr6
        width :16.66%
      .btn-tr4
        width :25%
</style>
