import { httpRequest } from '../utils/request.js'
// 获取热门推荐博主
export const getHotBlogerApi = (data) => {
  return httpRequest('post', '/getHotTagBlog', data)
}
// 搜索博主
export const searchBlogerApi = (data) => {
  return httpRequest('post', '/search', data)
}
