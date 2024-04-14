import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

/**
 * 获取官方店铺分类数据
 * @returns
 */
export function getOfficailShopCategory() {
  return xhRequest.get<any>({
    headers: new AxiosHeaders(),
    url: '/user/category/list',
  })
}

/**
 * 获取官方店铺商品数据(根据分类进行检索)
 * @returns
 */
export function getOfficailShopCommodity(categoryId: number) {
  return xhRequest.get<any>({
    headers: new AxiosHeaders(),
    url: '/user/commodity/list',
    params: {
      categoryId,
    },
  })
}

export function getOfficailShopSetmeal(params: any) {
  return xhRequest.get<any>({
    headers: new AxiosHeaders(),
    url: '/user/setmeal/page',
    params,
  })
}
