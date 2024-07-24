import http from '@/utils/http'

export function getBanner (params = {}) {
  const { distributionSite = '1' } = params
  return http({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

export function getHot () {
  return http({
    url: '/home/hot'
  })
}
