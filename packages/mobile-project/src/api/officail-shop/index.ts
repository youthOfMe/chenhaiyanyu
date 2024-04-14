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

/**
 * 分页获取套餐数据
 * @param params
 * @returns
 */
export function getOfficailShopSetmeal(params: any) {
  return xhRequest.get<any>({
    headers: new AxiosHeaders(),
    url: '/user/setmeal/page',
    params,
  })
}

/**
 * 分页获取商品数据
 * @param params
 * @returns
 */
export function getOfficailShopPageCommodity(params: any) {
  return xhRequest.get<any>({
    headers: new AxiosHeaders(),
    url: '/user/commodity/page',
    params,
  })
}

/**
 * 根据ID查询商品数据
 * @param id
 * @returns
 */
export function getOfficailShopCommodityDetail(id: number) {
  return xhRequest.get<any>({
    headers: new AxiosHeaders(),
    url: `/user/commodity/` + id,
  })
}
