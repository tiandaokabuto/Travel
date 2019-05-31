<template>
  <div>
    <div class="search">
      <input v-model="keyword" placeholder="输入城市名或者拼音" type="text" class="search-input">
    </div>
    <div class="search-content" ref="wrapper" v-show="keyword">
      <ul>
        <li v-for="item of list" :key="item.id"
        class="search-item border-bottom" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasData">没有要查找的城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null // 节流
    }
  },
  computed: {
    hasData () {
      return !this.list.length
    }
  },
  props: {
    cities: Object
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)// 未生效
  },
  methods: {
    handleCityClick (name) {
      this.$store.commit('changeCity', name)
      this.$router.push('/')
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (this.keyword === '') {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (value.spell.indexOf(this.keyword) > -1 ||
            value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  .search
    height :0.72rem
    background :$bgColor
    padding :0.1rem
    .search-input
      height :0.62rem
      line-height :0.62rem
      width :100%
      bordder-radius :0.06rem
      text-align :center
      color :#666
      padding :0 0.1rem
      box-sizing :border-box
  .search-content
    position :absolute
    top :1.78rem
    left :0
    right :0
    bottom :0
    overflow :hidden
    background :#ccc
    z-index :1
    .search-item
      line-height :0.62rem
      padding-left :0.2rem
      color :#666
      background :#fff
</style>
