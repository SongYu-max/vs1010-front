import request from '@/utils/request'

export default {
    //查询前台讲师列表
  getTeacherList(page,limit) {
    return request({
      url: `/eduservice/teacherfront/getTeacherFrontList/${page}/${limit}`,
      method: 'post',
    })
  },
  getLoginUserInfo() {
    return request({
      url: '/educenter/member/getMemberInfo',
      method: 'get'
    })
  }
}