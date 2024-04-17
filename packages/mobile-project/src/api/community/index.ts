import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

/**
 * 获取一级分类数据
 * @returns
 */
export function getParentCategoryList() {
  return xhRequest.get({
    headers: new AxiosHeaders(),
    url: '/user/community/category/parentList',
  })
}
