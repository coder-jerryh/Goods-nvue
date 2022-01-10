import MD5 from './md5'
export const createSign = (params, uid, token) => {
  let arr = []
  let num = 0
  for (let i in params) {
    arr[num] = i
    num++
  }
  let sortArr = arr.sort()
  let str = '' // 自定义排序字符串
  for (let i in sortArr) {
    str += sortArr[i] + '=' + params[sortArr[i]] + '&'
  }
  // 去除两侧字符串
  let char = '&'
  str = str.replace(new RegExp('^\\' + char + '+|\\' + char + '+$', 'g'), '')
  return MD5(`${str}&@${uid}&${Date.parse(new Date()) / 1000}&${token}`)
}
