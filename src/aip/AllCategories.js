import http from '@/utils/http'

export function GetAtHome (id) {
  return http({
    url: '/category',
    params: {
      id
    }
  })
}
