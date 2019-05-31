import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '江门'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default new Vuex.Store({
  state: {
    city: defaultCity // 优先从localStorage里面取，获取不了则使用'江门'
  },
  // actions: {
  // changeCity (ctx, name) {
  //   ctx.commit('changeCity', name)
  // }
  mutations: {
    changeCity (state, name) {
      state.city = name
      try {
        localStorage.city = name
      } catch (e) {}
    }
  }
})
