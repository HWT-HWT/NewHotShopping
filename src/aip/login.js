import http from '@/utils/http'
// 发起登录
export function GetToken (account, password) {
  return http({
    url: '/login',
    method: 'post',
    data: {
      account,
      password
    }
  })
}
