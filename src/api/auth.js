import request from 'src/utils/request'

export const localLogin = function (data) {
  return request['post']('admin/auth/local', data)
}
export const getUserInfo = function () {
  return request['get']('admin/userInfo')
}




