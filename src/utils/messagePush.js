export const messagePush = () => {
  const options = {
    cover: false
  }
  // 获取推送通知
  plus.push.addEventListener('receive', (msg) => {
    if (plus.os.name !== 'iOS') {
      // 安卓
      plus.push.createMessage(msg.content, 'LocalMSG', options)
    } else {
      // ios
      switch (msg.payload) {
        // 如果msg.payload为LocalMSG则不创建本地消息
        case 'LocalMSG':
          break
        default:
          // 创建本地消息
          plus.push.createMessage(msg.content, 'LocalMSG', options)
          break
      }
    }
  }, false)

  // 清理提示消息数量
  plus.push.clear()

  // 点击推送进来
  plus.push.addEventListener('click', (msg) => {
    if (msg.payload && msg.payload.page) {
      let params = msg.payload.params
      let query = ''
      Object.keys(params).forEach((name) => {
        if (query) {
          query += `&${name}=${params[name]}`
        } else {
          query = `?${name}=${params[name]}`
        }
      })
      uni.navigateTo({
        url: `/${msg.payload.page}${query}`
      })
    } else {
      uni.switchTab({
        url: '/pages/homePage/index'
      })
    }
  }, false)
}
