import Vue from 'vue'
import Vuex from 'vuex'
import {getUserInfoApi, loginApi} from '../api/mine'
import config from '../config'
import {getLocation} from '../utils/method'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    // 配置
    config,
    // 用户信息
    userInfo: uni.getStorageSync('userInfo') || {},
    // 分享
    shareInfo: {
      title: '', // 转发后 所显示的title
      path: '/pages/homePage/index', // 相对的路径
      imageUrl: ''
    },
    alertFlag: false,
    wxappIsPass: 1
  },
  actions: {
    // 获取用户信息
    getUserInfo ({commit}) {
      getUserInfoApi().then(({ data }) => {
        let userInfo = data
        // 存在商家信息
        if (data.enterprise_and_authentication) {
          userInfo = {...userInfo, ...data.enterprise_and_authentication}
        }
        commit('setUserInfo', {...uni.getStorageSync('userInfo'), ...userInfo})
        // getMerchantInfoApi().then(({ data }) => {
        //   const merchant = {...userInfo.merchant, audit: data.audit}
        // })
      })
    },
    // 登录
    login ({ commit }) {
      return new Promise(resolve => {
        uni.login({
          success ({ code }) {
            // uni.getUserInfo({
            //   success: (res) => {
            //     const {encryptedData, iv} = res
            loginApi({code}).then(({ data }) => {
              const baseInfo = {
                ...data,
                token: data.Token,
                phone: data.UserInfo.phone
              }
              delete baseInfo.avatar
              delete baseInfo.nickname
              commit('setUserInfo', baseInfo)
              data && uni.setStorageSync('token', data.Token)
              resolve()
            })
            // }
            // })
          }
        })
      })
    },
    // 获得距离
    getUserLocation ({commit}) {
      getLocation().then(location => {
        commit('saveUserLocation', location)
      })
    }
  },
  mutations: {
    // 保存用户信息
    setUserInfo (state, info) {
      if (!info) {
        state.userInfo = {}
        uni.removeStorageSync('userInfo')
      } else {
        state.userInfo = { ...state.userInfo, ...info }
        uni.setStorageSync('userInfo', state.userInfo)
      }
    },
    // 设置分享内容
    setShare (state, info) {
      state.shareInfo = info
    },
    changeAlert (state, flag) {
      state.alertFlag = flag
    },
    changePass (state, flag) {
      state.wxappIsPass = flag
    }
  },
  getters: {
    isLogin: (state) => Boolean(state.userInfo && state.userInfo.token)
  }
})
export default store
