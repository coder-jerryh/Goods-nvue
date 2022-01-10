import Vue from 'vue'
import { QQMapWX } from './wx-jssdk'
import config from '../config'
import { getAddress } from '../utils/filters'
import {Toast} from '../utils/popup'
// 获取位置
export const getLocation = () => {
  return new Promise((resolve) => {
    uni.getLocation({
      type: 'gcj02', // 返回可以用于wx.openLocation的经纬度
      success (res) {
        const { latitude, longitude } = res
        const qqmapsdk = new QQMapWX({
          key: config.qqMapKey
        })
        const location = { latitude, longitude }
        qqmapsdk.reverseGeocoder({
          location,
          success ({ result }) {
            resolve({
              ...location,
              city: result.ad_info.city.replace('市', '')
            })
          },
          fail () {
            Vue.prototype.$Toast('none', '获取地理位置信息失败')
          }
        })
      },
      fail (res) {
        if (res.errMsg.includes('auth')) {
          Vue.prototype.$Confirm(
            '提示',
            '获取定位失败，请打开设置开启定位',
            '打开设置',
            () => {
              uni.openSetting()
            }
          )
        }
      }
    })
  })
}

// 打开地图
export const openLocation = ({latitude, longitude, name, address}) => {
  return new Promise((resolve) => {
    uni.openLocation({
      scale: 28,
      latitude: Number(latitude),
      longitude: Number(longitude),
      name,
      address,
      success: res => {
        resolve(res)
      }
    })
  })
}

// 选择位置
export const selectLocation = (location) => {
  const latitude = location.latitude || ''
  const longitude = location.longitude || ''
  return new Promise((resolve, reject) => {
    uni.chooseLocation({
      latitude,
      longitude,
      success (res) {
        // address: "四川省成都市双流区顺城街27号"
        // errMsg: "chooseLocation:ok"
        // latitude: 30.574359
        // longitude: 103.922807
        // name: "中国建设银行(双流支行)"
        resolve({
          latitude: res.latitude,
          longitude: res.longitude,
          address: res.address + res.name,
          addressList: getAddress(res.address)
        })
      },
      fail (res) {
        if (res.errMsg.includes('auth')) {
          reject(res)
          Vue.prototype.$Confirm(
            '提示',
            '获取定位失败，请打开设置开启定位',
            '打开设置',
            () => {
              uni.openSetting()
            }
          )
        }
      }
    })
  })
}

// App分享成小程序
export const shareAppToMp = (shareInfo, cb) => {
  uni.downloadFile({
    url: shareInfo.imageUrl,
    success: (res) => {
      if (res.statusCode === 200) {
        uni.share({
          provider: 'weixin', // 分享服务提供商
          // WXSceneSession分享到聊天界面、WXSceneTimeline分享到朋友圈、WXSceneFavorite分享到微信收藏
          scene: 'WXSceneSession',
          type: 5, // 图文、纯文字、纯图片、音乐、视频、小程序，5为小程序
          imageUrl: res.tempFilePath,
          title: shareInfo.title,
          miniProgram: {
            id: 'gh_4fbb01578e1a', // 小程序原始ID
            path: shareInfo.path,
            type: config.envType, // 小程序版本类型，0正式版、1测试版、2-体验版，默认为0
            webUrl: 'https://goodins.njboshi.net/app/' // 兼容低版本的网页链接，可选
          },
          success () {
            Toast('success', '分享成功！')
            cb()
          },
          fail (e) {
            console.log(e)
          }
        })
      }
    }
  })
}
