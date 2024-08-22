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
