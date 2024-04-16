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
