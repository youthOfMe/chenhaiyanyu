import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

export function getDetailInfos(houseId: number) {
  return xhRequest.get({
    headers: new AxiosHeaders(),
    url: '/detail/infos',
    params: {
      houseId,
    },
  })
}
