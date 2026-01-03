import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 用户信息
    userInfo: uni.getStorageSync('userInfo') || null,
    // 登录token
    token: uni.getStorageSync('token') || '',
    // 系统信息
    systemInfo: {}
  },

  getters: {
    // 是否已登录
    isLogin: state => !!state.token,
    // 用户昵称
    userName: state => state.userInfo?.nickName || '未登录'
  },

  mutations: {
    // 设置用户信息
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo
      uni.setStorageSync('userInfo', userInfo)
    },

    // 设置 token
    SET_TOKEN(state, token) {
      state.token = token
      uni.setStorageSync('token', token)
    },

    // 清除用户信息
    CLEAR_USER_INFO(state) {
      state.userInfo = null
      state.token = ''
      uni.removeStorageSync('userInfo')
      uni.removeStorageSync('token')
    },

    // 设置系统信息
    SET_SYSTEM_INFO(state, systemInfo) {
      state.systemInfo = systemInfo
    }
  },

  actions: {
    // 登录
    async login({ commit }, params) {
      try {
        // 调用登录接口
        const res = await this.$api.post('/api/login', params)
        commit('SET_TOKEN', res.token)
        commit('SET_USER_INFO', res.userInfo)
        return res
      } catch (error) {
        throw error
      }
    },

    // 退出登录
    logout({ commit }) {
      commit('CLEAR_USER_INFO')
      uni.reLaunch({
        url: '/pages/login/login'
      })
    },

    // 获取系统信息
    getSystemInfo({ commit }) {
      uni.getSystemInfo({
        success: (res) => {
          commit('SET_SYSTEM_INFO', res)
        }
      })
    }
  }
})

export default store
