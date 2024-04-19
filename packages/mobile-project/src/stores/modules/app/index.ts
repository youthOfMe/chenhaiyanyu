import { getAppImgListByType } from '@/api'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: (): any => ({
    appImgList: [],
  }),
  actions: {
    async fetchAppImgListByType(type: number) {
      const res = await getAppImgListByType(type)
      this.appImgList = res.data
    },
  },
})
