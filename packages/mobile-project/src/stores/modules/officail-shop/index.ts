import {
  getOfficailShopCategory,
  getOfficailShopCommodity,
  getOfficailShopPageCommodity,
  getOfficailShopSetmeal,
  getOfficailShopCommodityDetail,
} from '@/api'
import { defineStore } from 'pinia'

export const useOfficailShopStore = defineStore('officailShop', {
  state: (): any => ({
    categoryList: [],
    commodityList: [],
    setmealList: [],
    commodityPageList: [],
    commodity: {},
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
    async fetchCommodityPageList(params: any) {
      const res = await getOfficailShopPageCommodity(params)
      this.commodityPageList = res.data
    },
    async fetchCommodityDetail(id: number) {
      const res = await getOfficailShopCommodityDetail(id)
      this.commodity = res.data
    },
  },
})
