import {
  getOfficailShopCategory,
  getOfficailShopCommodity,
} from '@/api/officail-shop'
import { defineStore } from 'pinia'

export const useOfficailShopStore = defineStore('officailShop', {
  state: (): any => ({
    categoryList: [],
    commodityList: [],
  }),
  actions: {
    async fetchCategoryList() {
      const res = await getOfficailShopCategory()
      this.categoryList = res.data
    },
    async fetchCommodityList(categoryId: number) {
      const res = await getOfficailShopCommodity(categoryId)
      this.commodityList = res.data
    },
  },
})
