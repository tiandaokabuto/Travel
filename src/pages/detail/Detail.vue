<template>
  <div>
    <detail-banner :bannerImg="bannerImg" :Imgs="gallaryImgs" :sightName="sightName"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  data () {
    return {
      list: [],
      sightName: '',
      bannerImg: '',
      gallaryImgs: []
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  methods: {
    getDetail () {
      axios.get('/api/detail.json?', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailSucc)
    },
    getDetailSucc (res) {
      if (res.data.data && res.data.ret) {
        const data = res.data.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
        console.log(this.gallaryImgs)
      }
    }
  },
  mounted () {
    this.getDetail()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height :20rem
</style>
