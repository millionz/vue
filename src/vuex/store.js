/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'

//使用vuex
Vue.use( Vuex )


const state = {
  userInfo : {}
}


const mutations = {
  UPDATE_USERINFO : ( state , userInfo ) => {
    //这里写更新用户信息的逻辑
  }
}

// vuex2有新的语法替代旧getters
export default new Vuex.Store({
  state,
  // getters,
  mutations
})
