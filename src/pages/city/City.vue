<template>
  <div>
    <city-header :city="city"></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :charList="charList"
    :hotCityList="hotCityList"
    :cities="cities"
    :letter="letter"></city-list>
    <!-- 监听Char的change事件 -->
    <city-char :charList="charList" @change="handleLetterChange"></city-char>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityChar from './components/Char'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityChar
  },
  data () {
    return {
      charList: [],
      hotCityList: [],
      cities: {},
      letter: '',
      city: '江门'
    }
  },
  methods: {
    getCharInfo () {
      axios.get('/api/char.json').then(this.getCharInfoSucc)
    },
    getCharInfoSucc (res) {
      if (res.data.data && res.data.ret) {
        const charList = res.data.data
        this.charList = charList
      }
    },
    getHotCityInfo () {
      axios.get('/api/city.json').then(this.getHotCityInfoSucc)
    },
    getHotCityInfoSucc (res) {
      if (res.data.data && res.data.ret) {
        const hotCityList = res.data.data.hotCities
        this.hotCityList = hotCityList
      }
    },
    getCityInfo () {
      axios.get('/api/city.json').then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      if (res.data.data && res.data.ret) {
        const cities = res.data.data.cities
        this.cities = cities
        const hotCityList = res.data.data.hotCities
        this.hotCityList = hotCityList
      }
    },
    handleLetterChange (letter) { // Char传递过来的letter
      this.letter = letter
    }
  },
  mounted () {
    this.getCharInfo()
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
