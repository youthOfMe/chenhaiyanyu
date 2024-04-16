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

/**
 * 用户端分页查询历史订单
 * @param pageNumber
 * @param pageSize
 * @param status
 * @returns
 */
export function getOrderListPage(
  page: number,
  pageSize: number,
  status?: number,
) {
  return xhRequest.get<any>({
    headers: new AxiosHeaders(),
    url: '/user/order/historyOrders',
    params: {
      page,
      pageSize,
      status,
    },
  })
}

/**
 * 用户支付订单
 * @param orderNumber
 * @param payMehod
 * @param amount
 * @returns
 */
export function payOrder(
  orderNumber: string,
  payMehod: number,
  amount: number,
) {
  return xhRequest.put<any>({
    headers: new AxiosHeaders(),
    url: '/user/order/payment',
    data: {
      orderNumber,
      payMehod,
      amount,
    },
  })
}
