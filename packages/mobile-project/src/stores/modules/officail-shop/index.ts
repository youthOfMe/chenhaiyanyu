import {
  getOfficailShopCategory,
  getOfficailShopCommodity,
  getOfficailShopSetmeal,
} from '@/api/officail-shop'
import { defineStore } from 'pinia'

export const useOfficailShopStore = defineStore('officailShop', {
  state: (): any => ({
    categoryList: [],
    commodityList: [],
    setmealList: [],
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
    async fetchSetmealList(params: any) {
      const res = await getOfficailShopSetmeal(params)
      this.setmealList = res.data
    },
  },
})
