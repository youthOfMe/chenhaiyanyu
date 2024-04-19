import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

/**
 * 根据ID获取App配置的图片列表
 * @param type
 * @returns
 */
export function getAppImgListByType(type: number) {
  return xhRequest.get({
    headers: new AxiosHeaders(),
    url: '/user/app/img/img',
    params: {
      type,
    },
  })
}
