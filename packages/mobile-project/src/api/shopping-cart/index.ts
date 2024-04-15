import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

/**
 * 添加商品到购物车
 * @param data
 * @returns
 */
export function addCommodityToCart(data: any) {
  return xhRequest.post<any>({
    headers: new AxiosHeaders(),
    url: '/user/shoppingCart/add',
    data,
  })
}

/**
 * 获取到购物车中的数据
 * @returns
 */
export function getShoppingCartList() {
  return xhRequest.get({
    headers: new AxiosHeaders(),
    url: '/user/shoppingCart/list',
  })
}
