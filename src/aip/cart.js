import http from '@/utils/http'
export function GetCart () {
  return http({
    url: '/member/cart'
  })
}

export function GetAddCart (skuId, count) {
  return http({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}

export function GetDel (ids) {
  return http({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}
