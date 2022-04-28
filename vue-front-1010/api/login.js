import request from '@/utils/request'

export default {
    //查询热门课程和名师
  submitLoginUser(userInfo) {
    return request({
      url: '/educenter/member/login',
      method: 'post',
      data: userInfo
    })
  },
  getLoginUserInfo() {
    return request({
      url: '/educenter/member/getMemberInfo',
      method: 'get'
    })
  }
}