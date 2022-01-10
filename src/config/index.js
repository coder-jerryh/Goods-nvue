const BASE_CONFIG = {
  qqMapKey: 'NB4BZ-FJK6J-37TFA-F7KQZ-YSGT7-2XFMV'
}
const CONFIG = {
  // 开发版
  develop: {
    env: 'dev',
    // api: 'https://mp.activity.zenyuca.cn',
    api: 'https://api.sanduanlun.cn:8000',
    uploadUrl: 'https://api.sanduanlun.cn:8000/upload_file', // 上传接口
    fileUrl: 'https://api.sanduanlun.cn:8000'
  },
  // 体验版
  trial: {
    env: 'test',
    api: 'https://api.sanduanlun.cn:8000',
    uploadUrl: 'https://api.sanduanlun.cn:8000/upload_file', // 上传接口
    fileUrl: 'https://api.sanduanlun.cn:8000'
  },
  // 正式版
  release: {
    env: 'prod',
    api: 'https://mp.activity.upbook2321.com',
    uploadUrl: 'https://file.activity.upbook2321.com/file/upload', // 上传接口
    fileUrl: 'https://file.activity.upbook2321.com'
  }
}
export default {...BASE_CONFIG, ...CONFIG['develop']}
