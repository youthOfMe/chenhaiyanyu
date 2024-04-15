import { defineStore } from 'pinia'
import { getShoppingCartList } from '@/api'

export const useShoppingCartStore = defineStore('shoppingCart', {
  state: (): any => ({
    shoppingCart: [],
  }),
  actions: {
    async fecthShoppingCartList() {
      const res = await getShoppingCartList()
      this.shoppingCart = res.data
    },
  },
})
