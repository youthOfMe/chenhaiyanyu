import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

/**
 * 用户提交订单(未付款状态)
 * @param orderSubmitData
 * @returns
 */
export function submitOrder(orderSubmitData: any) {
  return xhRequest.post<any>({
    headers: new AxiosHeaders(),
    url: '/user/order/submit',
    data: orderSubmitData,
  })
}
