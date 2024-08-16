import http from '@/utils/http'

export function getBanner (params = {}) {
  const { distributionSite = '1' } = params
  // 获取首页banner图
  return http({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}
// 获取人气列表
export function getHot () {
  return http({
    url: '/home/hot'
  })
}
// 获取新鲜好物
export function getNew () {
  return http({
    url: '/home/new'
  })
}
// 获取品牌
export function getBrand () {
  return http({
    url: '/home/brand',
    params: {
      limit: 4
    }
  })
}
// 获取头部导航
export function getHeader () {
  return http({
    url: '/home/category/head'
  })
}
// 获取首页商品
export function getGoods () {
  return http({
    url: '/home/goods'
  })
}
