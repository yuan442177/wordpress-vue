import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  // actions: { // 拿到传过来的值 调用mutations去修改state中对应的数据
  //   changeCity (ctx, city) { // ctx 上下文参数用来拿到commit city传过来的值
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations: mutations
  // getters: {
  //   doubleCite (state) {
  //     return state.city + ' ' + state.city
  //   }
  // }
})
