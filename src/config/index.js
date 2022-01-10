const version = '1.0.6'
const CONFIG = {
  // 开发版
  develop: {
    env: 'dev',
    envType: 2,
    api: 'http://testapi.gi.njboshi.net:8000',
    uploadUrl: 'http://testapi.gi.njboshi.net:8000/upPic' // 上传接口
  },
  // 体验版/测试版
  trial: {
    env: 'test',
    envType: 2,
    api: 'https://api.gi.njboshi.net',
    uploadUrl: 'https://api.gi.njboshi.net/upPic' // 上传接口
  },
  // 正式版
  release: {
    env: 'prod',
    envType: 0,
    api: 'https://api.gi.njboshi.net',
    uploadUrl: 'https://api.gi.njboshi.net/upPic' // 上传接口
  }
}
let ENV = ''
// 小程序自动判断环境
// #ifndef APP-PLUS
ENV = __wxConfig.envVersion
// #endif

// App手动修改⚠️
// #ifdef APP-PLUS
ENV = 'develop'
// #endif
export default {...CONFIG[ENV], version}
