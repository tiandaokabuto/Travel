import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', //  访问根路径/显示Home
      name: 'Home',
      component: Home
      // component: HelloWorld
    }, {
      path: '/city', //  访问根路径/显示Home
      name: 'City',
      component: City
      // component: HelloWorld
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savePosition) {
    return { x: 0, y: 0 }
  }
})
