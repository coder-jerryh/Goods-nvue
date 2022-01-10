import { httpRequest } from '../utils/request.js'
// 首页推荐
export const getHomePageBlogListApi = (data) => {
  return httpRequest('post', '/getRecomPost', data)
}
// 首页推荐
export const testPushApi = () => {
  return httpRequest('post', '/testpush')
}
// 订阅
export const getFollowBlogListApi = (data) => {
  return httpRequest('post', '/getFollowBlogPost', data)
}
// 订阅博主
export const followBlogerApi = (data) => {
  return httpRequest('post', '/Blog/follow', data)
}
// 取消订阅博主
export const unFollowBlogerApi = (data) => {
  return httpRequest('post', '/Blog/unFollow', data)
}
// 收藏帖子
export const collowBlogeApi = (data) => {
  return httpRequest('post', '/Post/follow', data)
}
// 取消收藏帖子
export const unCollectBlogApi = (data) => {
  return httpRequest('post', '/Post/unFollow', data)
}
// 点赞帖子
export const likeBlogeApi = (data) => {
  return httpRequest('post', '/Post/like', data)
}
// 取消点赞帖子
export const unLikeBlogApi = (data) => {
  return httpRequest('post', '/Post/unLike', data)
}
// 查看翻译
export const readTranslateApi = (data) => {
  return httpRequest('post', '/translate', data)
}
// 查看博客主页
export const getBlogerInfoApi = (data) => {
  return httpRequest('post', '/Blog/index', data)
}
// 获取博主更多帖子列表
export const getBlogerBlogApi = (data) => {
  return httpRequest('post', '/Blog/getMorePost', data)
}
// 获取博主更多帖子列表
export const downloadFileApi = (data) => {
  return httpRequest('post', '/download', data)
}
// 拉黑博主
export const shieldBlogerApi = (data) => {
  return httpRequest('post', '/Blog/shield', data)
}
