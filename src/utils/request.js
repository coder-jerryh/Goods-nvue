import Vue from 'vue'
import Config from '../config/index'
import store from '../store/index'
import { computedDate } from './filters'
import { createSign } from './createSign'
const that = Vue.prototype
const preventHandle = (data) => {
  const now = new Date().getTime()
  const { reason, time } = JSON.parse(data.msg)
  that.$Alert(
    '禁用提示',
    `你因违反平台规则，暂无法操作\n原因：${reason}\n距离解除还有：${computedDate(time - now)}`,
    '我知道了'
  )
}

// 平台判断
let platform = uni.getSystemInfoSync().platform
// 小程序
// #ifndef APP-PLUS
platform = 'wxapp'
// #endif

// 订阅者
let subscribers = []
// 添加缓存接口
const addSubscriber = (method, url, data, callback) => {
  subscribers.push({ method, url, data, callback })
  if (subscribers.length === 1) {
    store.dispatch('login').then(() => {
      that.$Toast('loading', '正在加载')
      onAccessTokenFetched()
    })
  }
}

// 执行缓存接口
const onAccessTokenFetched = () => {
  subscribers.forEach(({ method, url, data, callback }) => {
    httpRequest(method, url, data || {}, callback)
  })
  // 清空
  subscribers = []
  uni.hideLoading()
}
let loadingTimer = null
// 是否打开了loading
let isShowLoading = false
export const httpRequest = (method, url, params = {}, callback) => {
  isShowLoading = false
  if (!params.hideLoading && !loadingTimer) {
    loadingTimer = setTimeout(() => {
      isShowLoading = true
      that.$Toast('loading', '正在加载')
    }, 500)
  }
  return new Promise((resolve, reject) => {
    if (!url.includes('http')) {
      url = Config.api + url
    }
    const userInfo = uni.getStorageSync('userInfo') || {}
    uni.request({
      url,
      data: params,
      method,
      timeout: 10000,
      header: {
        platform,
        'content-type': 'application/x-www-form-urlencoded',
        SIGN: createSign(params, userInfo.uid, uni.getStorageSync('token')),
        TIMESTAMP: Date.parse(new Date()) / 1000,
        UID: userInfo.uid || '',
        version: uni.getStorageSync('version') || Config.version
      },
      success ({ data }) {
        // 不拦截
        if (params.noIntercept) {
          return resolve(data)
        }
        clearTimeout(loadingTimer)
        if (callback) return callback(data)
        switch (data.status) {
          case 200:
            isShowLoading && uni.hideLoading()
            resolve(data)
            return
          // 登录过期
          case -2:
            // 没有token就触发重新登录
            if (!uni.getStorageSync('token')) {
              // 否则提示用户重新登录一次
              store.commit('setUserInfo', null)
              that.$Alert(
                '提示',
                '登录已过期，请重新登录~',
                '去登录',
                () => {
                  that.$toUrl('/pages/mine/login')
                }
              )
              return
            }
            // 移除之前的token
            delete params.token
            addSubscriber(method, url, params, resolve)
            return
          case 601:
            preventHandle(data)
            reject(data.code)
            return
          case 604:
            preventHandle(data)
            reject(data.code)
            return
          case 606:
            preventHandle(data)
            reject(data.code)
            return
          default:
            // 控制只弹一次弹窗
            if (store.state.alertFlag) return
            store.commit('changeAlert', true)
            that.$Alert(
              '提示',
              data.msg || '系统繁忙',
              '我知道了',
              () => {
                store.commit('changeAlert', false)
              }
            )
            uni.hideLoading()
            reject(data.code)
        }
      },
      fail (res) {
        uni.hideLoading()
        reject(res)
      },
      complete () {
        clearTimeout(loadingTimer)
        loadingTimer = null
      }
    })
  })
}
