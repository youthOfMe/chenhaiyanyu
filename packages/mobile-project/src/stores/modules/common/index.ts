import { defineStore } from 'pinia'
import { GET_PAGE_STATUS } from '@/utils/PageStatus'

export const useCommonStore = defineStore('common', {
  state: (): any => ({
    isLoading: false,
    socailPageIndex: GET_PAGE_STATUS(),
  }),
})
