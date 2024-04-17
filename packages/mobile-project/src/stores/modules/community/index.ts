import { getParentCategoryList } from '@/api'
import { defineStore } from 'pinia'

export const useCommunityStore = defineStore('community', {
  state: (): any => ({
    parentList: [],
  }),
  actions: {
    async fetchParentList() {
      const res = await getParentCategoryList()
      if (res.code === 1) {
        this.parentList = res.data
        return
      }
      return Promise.reject(res.msg)
    },
  },
})
