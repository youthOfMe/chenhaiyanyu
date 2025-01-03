import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

/**
 * 获取数据
 * @param houseId
 * @returns
 */
export function getDetailInfos(houseId: number) {
  return xhRequest.get({
    headers: new AxiosHeaders(),
    url: '/detail/infos',
    params: {
      houseId,
    },
  })
}
