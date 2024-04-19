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
export function getCategoryList(
  parentId?: number,
  recommended?: number,
  userId?: number,
) {
  return xhRequest.get({
    headers: new AxiosHeaders(),
    url: '/user/community/category/list',
    params: {
      parentId,
      recommended,
      userId,
    },
  })
}

/**
 * 根据板块ID获取帖子数据
 * @param categoryId
 * @returns
 */
export function getPostListById(
  categoryId: number | undefined,
  recommended?: number | undefined,
) {
  return xhRequest.get({
    headers: new AxiosHeaders(),
    url: '/user/community/post/list',
    params: {
      categoryId,
      recommended,
    },
  })
}

/**
 * 用户发布帖子
 * @param publishPostData
 * @returns
 */
export function publishPost(publishPostData: any) {
  return xhRequest.post({
    headers: new AxiosHeaders(),
    url: '/user/community/post/post',
    data: publishPostData,
  })
}

/**
 * 根据ID获取帖子详情
 * @param id
 * @returns
 */
export function getPostDetail(id: string) {
  return xhRequest.get({
    headers: new AxiosHeaders(),
    url: '/user/community/post/post',
    params: {
      id,
    },
  })
}

/**
 * 点赞/取消点赞
 * @param type
 * @param postId
 */
export function thumb(type: number, postId: string) {
  return xhRequest.post({
    headers: new AxiosHeaders(),
    url: '/user/community/post/thumb',
    params: {
      type,
      postId,
    },
  })
}

/**
 * 判断用户是否对帖子进行点赞了
 * @param postId
 * @returns
 */
export function isThumb(postId: string) {
  return xhRequest.get({
    headers: new AxiosHeaders(),
    url: '/user/community/post/isThumb',
    params: {
      postId,
    },
  })
}
