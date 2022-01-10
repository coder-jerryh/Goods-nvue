<script>
import {getSysConfigApi} from './api/index'
import store from './store/index'
import {messagePush} from './utils/messagePush'
export default {
  globalData: {
    platform: '',
    systemConfig: {
      share_home: {}
    },
    // #ifdef APP-PLUS
    version: plus.runtime.version
    // #endif
  },
  onLaunch (options) {
    const shareUid = options.query.shareUid
    if (shareUid) {
      uni.setStorageSync('shareUid', shareUid)
    }
    // 平台判断
    let platform = uni.getSystemInfoSync().platform
    // 小程序
    // #ifndef APP-PLUS
    platform = 'wxapp'
    // #endif

    // ios打开协议
    // #ifdef APP-PLUS
    if (!uni.getStorageSync('isAgreedProtocol') && platform === 'ios') {
      uni.redirectTo({
        url: `/pages/homePage/agreement`
      })
    }
    // 消息推送
    messagePush()
    uni.setStorageSync('version', plus.runtime.version)
    // #endif

    this.globalData.platform = platform
    if (uni.getStorageSync('token')) {
      // 获取用户信息
      store.dispatch('getUserInfo')
    }
    getSysConfigApi().then(({data}) => {
      this.globalData.systemConfig = data
      store.commit('changePass', data.wxapp_is_pass)
    })
  }
}
</script>
<style lang='scss'>
</style>