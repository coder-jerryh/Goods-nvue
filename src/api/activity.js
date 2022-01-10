import { httpRequest } from '../utils/request.js'

/** @活动 **/
// 列表-用户全部活动
export const getActivityListApi = (data) => {
  return httpRequest('post', '/enterprise/get_activity_list', data)
}
export const getActivityDetailApi = (data) => {
  return httpRequest('post', '/enterprise/get_activity_detail', data)
}
// 添加活动
export const addActivityApi = (data) => {
  return httpRequest('post', '/enterprise/create_activity', data)
}
// 修改
export const updateActivityApi = (data) => {
  return httpRequest('post', '/enterprise/get_activity_edit', data)
}
// 撤销
export const undoActivityApi = (data) => {
  return httpRequest('post', '/enterprise/get_activity_undo', data)
}
// 删除
export const delActivityApi = (data) => {
  return httpRequest('post', '/enterprise/get_activity_delete', data)
}
// 下线
export const offlineActivityApi = (data) => {
  return httpRequest('post', '/enterprise/get_activity_offline', data)
}

/** @参与活动 **/
// 参与活动
export const joinActivityApi = (data) => {
  return httpRequest('post', '/user/join_activity', data)
}
// 提交任务
export const submitActivityApi = (data) => {
  return httpRequest('post', '/user/commit_activity', data)
}
// 通过活动
export const passActivityJoinApi = (data) => {
  return httpRequest('post', '/enterprise/activity_participation_carry', data)
}
// 拒绝活动
export const rejectActivityJoinApi = (data) => {
  return httpRequest('post', '/enterprise/activity_participation_fail', data)
}

/** @推广 **/
// 推荐
export const getRecommendListApi = (data) => {
  return httpRequest('post', '/enterprise/get_adv_info', data)
}
// 开通推荐
export const openRecommendApi = (data) => {
  return httpRequest('post', '/enterprise/open_adv', data)
}
/** @行业 **/
export const getIndustryListApi = () => {
  return httpRequest('post', '/get_industry_list')
}
// -------------------------------------
// 抽奖活动
// 删除
export const delLotteryActivityDetailApi = (serviceID) => {
  return httpRequest('delete', `/mp/m/lottery/del/${serviceID}`)
}
// 发布
export const sendLotteryActivityApi = (serviceID) => {
  return httpRequest('put', `/mp/m/lottery/publish/${serviceID}`)
}
// 置顶/取消置顶
export const handleSortTopApi = (serviceID) => {
  return httpRequest('put', `/mp/m/lottery/topTrigger/${serviceID}`)
}
// 列表
export const getBannerListApi = (type) => {
  const Types = {
    'allActivity': 1
  }[type]
  return httpRequest('get', `/mp/banner/list/${Types}`)
}
// 列表-用户全部活动
export const getAllActivityListApi = (data) => {
  return httpRequest('post', '/mp/activity/list/all/userMp', {...data, hideLoading: true})
}
// 详情
export const getLotteryActivityDetailApi = (serviceID) => {
  let url = ''
  url = '/mp/m/lottery/detail'
  return httpRequest('get', `${url}/${serviceID}`)
}
// 获取邀请码
export const getShareCodeApi = (serviceID) => {
  return httpRequest('get', `/mp/u/lottery/shareCode/${serviceID}`)
}
// 抽奖活动-普通报名
export const applyActivityApi = (shareCode, serviceID) => {
  // 邀请码报名
  if (shareCode) {
    return httpRequest('post', `/mp/u/lottery/entry/${serviceID}/${shareCode}`)
  } else {
    return httpRequest('post', `/mp/u/lottery/entry/${serviceID}`)
  }
}
// 参与记录
export const getJoinListApi = (lotteryServiceID, data) => {
  return httpRequest('post', `/mp/u/lottery/list/log/join/${lotteryServiceID}`, data)
}
// 扫码兑换邀请奖品
export const scanVerifyPrizeApi = (isInvitePrize, activityServiceID, userServiceID) => {
  return httpRequest('post', `/mp/m/lottery/${isInvitePrize ? 'exchangeInvitePrize' : 'exchangePrize'}/${activityServiceID}/${userServiceID}`)
}
// 列表-指定抽奖的参与记录
export const getPrizeListApi = (lotteryServiceID) => {
  return httpRequest('post', `/mp/u/lottery/list/log/join/${lotteryServiceID}`)
}
// 列表-用户-附近活动
export const getNearbyActivityListApi = (data, userLocation) => {
  return httpRequest('post', `/mp/activity/list/nearby/userMp/${userLocation.longitude}/${userLocation.latitude}`, {...data, hideLoading: true})
}
// 列表-我的关注
export const getFocusListApi = (data) => {
  return httpRequest('post', '/mp/merchant/listForCollect', {...data, hideLoading: true})
}
// 列表-指定抽奖的获奖记录-核销记录
export const getActivityPrizeListApi = (lotteryServiceID, data) => {
  return httpRequest('post', `/mp/u/lottery/list/log/win/${lotteryServiceID}`, data)
}
// 列表-我的核销记录
export const getVerifyListApi = (data) => {
  return httpRequest('post', '/mp/m/lottery/list/log/win', data)
}
// 获得Scene值
export const getQrCodeSceneApi = (md5Code) => {
  return httpRequest('get', `/mp/system/getScene/${md5Code}`)
}
