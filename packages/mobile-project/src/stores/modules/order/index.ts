import { defineStore } from 'pinia'
import { submitOrder } from '@/api'

export const useOrderStore = defineStore('order', {
  state: (): any => ({
    orderData: {},
  }),
  actions: {
    // 提交订单
    async fetchSubmitOrder(orderSubmitData: any) {
      const res = await submitOrder(orderSubmitData)
      this.orderData = res.data
    },
  },
})
