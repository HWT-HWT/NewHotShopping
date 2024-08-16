import http from '@/utils/http'
// 全部分类
export function GetAtHome (id) {
  return http({
    url: '/category',
    params: {
      id
    }
  })
}
// 商品列表
export function GetAtHomeGoods (id, page) {
  return http({
    url: 'category/goods/temporary',
    method: 'post',
    data: {
      id,
      page,
      pageSize: 28,
      sortField: 'publishTime'
    }
  })
}
// 商品详情
export function GetDeta (id) {
  return http({
    url: '/goods',
    params: {
      id
    }
  })
}
