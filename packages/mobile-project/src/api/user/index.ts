import xhRequest from '@/service'
import { xhImRequest } from '@/service'
import { AxiosHeaders } from 'axios'

/**
 * 修改用户信息
 * @param data
 * @returns
 */
export function resetUserInfo(data: any) {
  return xhRequest.put<any>({
    headers: new AxiosHeaders(),
    url: '/user/user/userInfo',
    data,
  })
}

/**
 * 获取联系人信息
 * @param cursor
 * @param pageSize
 * @returns
 */
export function getFriendList(
  cursor: string | undefined = undefined,
  pageSize: number = 10,
) {
  return xhImRequest.get<any>({
    headers: new AxiosHeaders(),
    url: '/user/friend/page',
    params: {
      cursor,
      pageSize,
    },
  })
}

/**
 * 用户签到
 * @returns
 */
export function sign() {
  return xhRequest.get({
    headers: new AxiosHeaders(),
    url: '/user/user/sign',
  })
}

/**
 * 分页查询用户数据
 * @param pageQueryDTO
 * @returns
 */
export function pageQueryUserList(pageQueryDTO: any) {
  return xhRequest.get({
    headers: new AxiosHeaders(),
    url: '/user/user/page',
    params: pageQueryDTO,
  })
}

import qs from 'qs'
/**
 * 根据标签搜索用户
 * @param tagNameList
 * @returns
 */
export function searchUsersByTags(tagNameList: any) {
  return xhRequest.get({
    headers: new AxiosHeaders(),
    url: '/user/user/search/tags',
    params: {
      tagNameList,
    },
    paramsSerializer: (params) => {
      return qs.stringify(params, { indices: false })
    },
  })
}
