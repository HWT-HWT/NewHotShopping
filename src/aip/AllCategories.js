import http from '@/utils/http'

export function GetAtHome (id) {
  return http({
    url: '/category',
    params: {
      id
    }
  })
}

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

export function GetDeta (id) {
  return http({
    url: '/goods',
    params: {
      id
    }
  })
}
