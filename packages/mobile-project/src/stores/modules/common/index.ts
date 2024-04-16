import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', {
  state: (): any => ({
    isLoading: false,
  }),
})
