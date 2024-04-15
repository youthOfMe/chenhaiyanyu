import { defineStore } from 'pinia'
import { submitOrder, getOrderListPage } from '@/api'

export const useOrderStore = defineStore('order', {
  state: (): any => ({
    orderData: {},
    historyOrderDataList: [],
  }),
  actions: {
    // 提交订单
    async fetchSubmitOrder(orderSubmitData: any) {
      const res = await submitOrder(orderSubmitData)
      this.orderData = res.data
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
