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
    // 是否处于登录中
    logining: false,
    keyboardHeight: uni.getStorageSync('keyboardHeight') || 0,
    userLocation: {},
    alertFlag: false
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
        // 有商家信息
        if (info.merchant) {
          // 已通过、二次编辑
          state.userInfo.isMerchant = [2, 4].includes(info.merchant.audit)
          state.userInfo.merchant = {
            ...info.merchant,
            labelList: typeof info.merchant.labels === 'string' ? info.merchant.labels.split(',') : info.merchant.labels,
            pictures: typeof info.merchant.pictures === 'string' ? info.merchant.pictures.split(',') : info.merchant.pictures
          }
        }
        uni.setStorageSync('userInfo', state.userInfo)
      }
    },
    // 设置分享内容
    setShare (state, info) {
      const {imageUrl} = info
      state.shareInfo = info
      if (imageUrl && !imageUrl.includes('http')) {
        state.shareInfo.imageUrl = config.fileUrl + imageUrl
      }
    },
    setKeyboardHeight (state, height) {
      state.keyboardHeight = height
      uni.setStorageSync('keyboardHeight', height)
    },
    // 保存用户距离
    saveUserLocation (state, userLocation) {
      state.userLocation = userLocation
    },
    changeAlert (state, flag) {
      state.alertFlag = flag
    }
  }
})
export default store
