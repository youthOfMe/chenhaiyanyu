import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

/**
 * 获取用户所有的地址信息
 * @returns
 */
export function getAddressBookList() {
  return xhRequest.get({
    headers: new AxiosHeaders(),
    url: '/user/addressBook/list',
  })
}

/**
 * 新增用户地址数据
 * @param data
 * @returns
 */
export function addAddress(data: any) {
  return xhRequest.post({
    headers: new AxiosHeaders(),
    url: '/user/addressBook',
    data,
  })
}
