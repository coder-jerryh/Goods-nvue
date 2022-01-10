import {httpRequest} from '../utils/request.js'
// 手机号登录
export const phoneLoginApi = (data) => {
  return httpRequest('post', '/login', data)
}
// 验证码
export const sendCodeApi = (data) => {
  return httpRequest('post', '/sendCode', data)
}
// 根据code解析
export const codeSessionApi = (data) => {
  return httpRequest('post', '/code2Session', data)
}
// 微信登录
export const wxLoginApi = (data) => {
  return httpRequest('post', '/wxReg', data)
}
// 绑定手机号
export const bindPhoneApi = (data) => {
  return httpRequest('post', '/wxRegPhone', data)
}
// 个推
export const editGeTuiApi = (data) => {
  return httpRequest('post', '/editGetui', data)
}
