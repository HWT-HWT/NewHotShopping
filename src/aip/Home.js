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

export function getNew () {
  return http({
    url: '/home/new'
  })
}

export function getBrand () {
  return http({
    url: '/home/brand',
    params: {
      limit: 4
    }
  })
}
export function getHeader () {
  return http({
    url: '/home/category/head'
  })
}

export function getGoods () {
  return http({
    url: '/home/goods'
  })
}
