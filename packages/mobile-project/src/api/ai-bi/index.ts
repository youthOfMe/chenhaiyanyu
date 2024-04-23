import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

export function genChartByAiUsingPOST(params: any, formData: FormData) {
  return xhRequest.request<any>({
    method: 'POST',
    requestType: 'form',
    headers: new AxiosHeaders(),
    url: '/user/chart/gen',
    params: {
      ...params,
    },
    data: formData,
  })
}
