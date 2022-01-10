import Vue from 'vue'
import { dateFilter, dateFromNow, formatQuery } from './filters'
import './popup'
import config from '../config'
const that = Vue.prototype

that.isAndroid = () => uni.getSystemInfoSync().platform === 'android'
// 分页
that.$pages = {
  page: 1,
  pageSize: 10,
  totalNum: 0
}
// 小程序环境
that.$platform = 'mp'
// h5环境
// #ifdef H5
that.$platform = 'h5'
// #endif

// 日期格式化
that.$dateFilter = dateFilter
that.$dateFromNow = dateFromNow
that.$FQ = formatQuery

// 路由跳转
that.$toUrl = (url, type) => {
  const isLogin = uni.getStorageSync('userInfo')?.token
  if (type === 'verifyLogin' && !isLogin) {
    return uni.navigateTo({
      url: '/pages/login/index'
    })
  }
  uni.navigateTo({
    url
  })
}
that.$toTab = (url) => {
  uni.switchTab({
    url
  })
}
that.$toBack = () => {
  uni.navigateBack()
}


// 导航栏高度
that.$navTop = (height = 0) => {
  return that.$bounding.top + height + 'px'
}

// 导航栏+胶囊高度
that.$navigationBar = (height = 0) => {
  return that.$bounding.height + that.$bounding.top + height + 'px'
}

// 预览图片
that.$previewPic = (urls, index = 0) => {
  if (!urls.includes('http')) {
    urls = urls.map(url => config.fileUrl + url)
  }
  uni.previewImage({
    urls,
    current: urls[index],
    longPressActions: {
      itemList: ['发送给朋友', '保存图片', '收藏']
    }
  })
}

// 获得路由信息
that.$getRoute = () => {
  const pages = getCurrentPages()
  const page = pages[pages.length - 1]
  return {
    fullPath: page.$page.fullPath,
    route: page.route,
    options: page.options
  }
}

// 禁止点击
that.$preventClick = () => {
  return false
}

// 深拷贝
that.$deepClone = (data) => {
  return JSON.parse(JSON.stringify(data))
}

// 查询DOM
that.$querySelecter = (className, _this) => {
  return new Promise(resolve => {
    that.$nextTick(() => {
      uni.createSelectorQuery().in(_this).select(className).boundingClientRect().exec(res => {
        resolve(res[0])
      })
    })
  })
}

// 下划线转驼峰
that.$undelineToHump = (obj) => {
  const newObj = {}
  for (const key in obj) {
    const newKey = key.replace(/_(\w)/g, (all, letter) => letter.toUpperCase())
    newObj[newKey] = obj[key]
  }
  return newObj
}

// 格式化金额
that.$formatMoney = money => {
  if (!money) return '0.00'
  const options = {
    style: 'currency',
    currency: 'CNY'
  }
  return money.toLocaleString('zh-CN', options).replace('¥', '')
}
