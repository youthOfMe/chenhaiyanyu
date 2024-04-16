import xhRequest from '@/service'
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
