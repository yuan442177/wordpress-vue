// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/styles/reset.css'// 样式格式化
import './assets/styles/border.css'// 解决1px边框问题
import { Button, NavBar, PullRefresh, Toast,
  List, Cell, DatetimePicker, Popup, Loading,
  Tabbar, TabbarItem, Skeleton } from 'vant'

Vue.use(Button).use(NavBar).use(PullRefresh).use(Toast).use(List)
  .use(Cell).use(DatetimePicker).use(Popup).use(Loading).use(Tabbar)
  .use(TabbarItem).use(Skeleton)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// router.afterEach((to, from, next) => {
//   window.scrollTo(0, 0)
// })
