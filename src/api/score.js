import { httpRequest } from '../utils/request.js'
// 获取积分任务信息
export const getTaskInfoApi = (data) => {
  return httpRequest('post', '/getTaskInfo', data)
}
// 签到
export const checkInApi = (data) => {
  return httpRequest('post', '/checkIn', data)
}
// 领取任务
export const receiveTaskApi = (data) => {
  return httpRequest('post', '/receiveTask', data)
}
// 完成任务
export const completeTaskApi = (data) => {
  return httpRequest('post', '/completeTask', data)
}
