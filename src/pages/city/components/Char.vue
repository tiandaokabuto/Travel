<template>
  <ul class="list">
    <li class="item" v-for="item of charList" :key="item" :ref="item"
    @click="handleLetterClick"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityChar',
  props: {
    charList: Array
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.charList) {
        letters.push(this.charList[i])
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null // 节流
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop // 只执行一次
  },
  // 兄弟组件通讯 Char与City City与List
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)// 向外触发事件，向City传递点击的字符
    },
    handleTouchStart (e) {
      this.touchStatus = true // 点击滑动事件标记，开始
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // A距离顶部的距离，松开鼠标之后的字母距离顶部的距离计算出距离差，除以每个
        // 字母的高度算出在哪一个字母松开鼠标
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const endY = e.touches[0].clientY - 80
          const index = Math.floor((endY - this.startY) / 20) // 计算出当前鼠标位置的字母下标
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd (e) {
      this.touchStatus = false // 点击滑动事件标记，结束
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
