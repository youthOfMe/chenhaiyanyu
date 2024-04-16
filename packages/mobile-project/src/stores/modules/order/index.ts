import { defineStore } from 'pinia'
import { submitOrder, getOrderListPage } from '@/api'
import { GET_ORDER_INFO, SET_ORDER_INFO } from '@/utils/order'

export const useOrderStore = defineStore('order', {
  state: (): any => ({
    orderData: GET_ORDER_INFO() || {},
    historyOrderDataList: [],
  }),
  actions: {
    // 提交订单
    async fetchSubmitOrder(orderSubmitData: any) {
      const res = await submitOrder(orderSubmitData)
      this.orderData = res.data
      SET_ORDER_INFO({
        payMethod: orderSubmitData.payMethod,
        ...this.orderData,
      })
    },
    // 获取历史订单
    async fetchHistoryOrderDataList(
      page: number,
      pageSize: number,
      status?: number,
    ) {
      const res = await getOrderListPage(page, pageSize, status)
      console.log(res.data.records, 666)

      this.historyOrderDataList = res.data.records
    },
  },
})
