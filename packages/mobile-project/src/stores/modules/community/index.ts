import { getCategoryList, getParentCategoryList } from '@/api'
import { defineStore } from 'pinia'

export const useCommunityStore = defineStore('community', {
  state: (): any => ({
    parentList: [],
    categoryList: [],
  }),
  actions: {
    // 获取一级目录
    async fetchParentList() {
      const res = await getParentCategoryList()
      if (res.code === 1) {
        this.parentList = res.data
        return
      }
      return Promise.reject(res.msg)
    },
    // 获取板块目录
    async fetchCategoryList(
      parentId: number | undefined,
      recommended: number | undefined,
    ) {
      const res = await getCategoryList(parentId, recommended)
      if (res.code === 1) {
        this.categoryList = res.data
        return
      }
      return Promise.reject(res.msg)
    },
  },
})
