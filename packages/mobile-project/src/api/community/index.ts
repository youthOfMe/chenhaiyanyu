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

/**
 * 获取板块数据
 * @param parentId
 * @param recommended
 * @returns
 */
export function getCategoryList(parentId?: number, recommended?: number) {
  return xhRequest.get({
    headers: new AxiosHeaders(),
    url: '/user/community/category/list',
    params: {
      parentId,
      recommended,
    },
  })
}

/**
 * 根据板块ID获取帖子数据
 * @param categoryId
 * @returns
 */
export function getPostListById(categoryId: number) {
  return xhRequest.get({
    headers: new AxiosHeaders(),
    url: '/user/community/post/list',
    params: {
      categoryId,
    },
  })
}
