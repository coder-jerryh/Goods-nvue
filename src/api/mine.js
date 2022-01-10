import { httpRequest } from '../utils/request.js'
// 用户协议
export const getProtocolApi = () => {
  return httpRequest('get', '/protocol?type=body', {noIntercept: true})
}
// 隐私协议
export const getPrivacyPolicyApi = () => {
  return httpRequest('get', '/privacyPolicy?type=body', {noIntercept: true})
}
// 反馈
export const feedbackApi = (data) => {
  return httpRequest('post', '/feedback', data)
}
// 推荐
export const recommendApi = (data) => {
  return httpRequest('post', '/recommend', data)
}
// 用户最新基本信息
export const getUserInfoApi = () => {
  return httpRequest('post', '/getUserInfo', {hideLoading: true})
}
// 获取积分兑换套餐列表
export const getScoreComboListApi = () => {
  return httpRequest('post', '/getMembershipList')
}
// 获取积分兑换套餐列表
export const exchangeVipApi = (data) => {
  return httpRequest('post', '/buyMembership', data)
}
// 获取收藏帖子列表
export const getCollectBlogListApi = (data) => {
  return httpRequest('post', '/myFollowPost', data)
}
// 获取点赞帖子列表
export const getLikeBlogListApi = (data) => {
  return httpRequest('post', '/myLikePost', data)
}
// 获取订阅博主列表
export const getMyFocuslogListApi = (data) => {
  return httpRequest('post', '/myFollowBlog', data)
}
// 积分记录
export const getMyScoreNoteListApi = (data) => {
  return httpRequest('post', '/getIntegralLog', data)
}
// 修改手机号
export const editPhoneApi = (data) => {
  return httpRequest('post', '/editPhone', data)
}
// 修改手机号
export const bindWeixinApi = (data) => {
  return httpRequest('post', '/bindWeixin', data)
}
// 修改手机号
export const editUserInfoApi = (data) => {
  return httpRequest('post', '/editUserInfo', data)
}
// 关于我们
export const getAboutUsApi = () => {
  return httpRequest('get', '/getAboutUs')
}
// 关于我们
export const getMsgListApi = (data) => {
  return httpRequest('post', '/getNoticeList', data)
}
// 注销账号
export const closeAccountApi = () => {
  return httpRequest('post', '/closeAccount')
}
