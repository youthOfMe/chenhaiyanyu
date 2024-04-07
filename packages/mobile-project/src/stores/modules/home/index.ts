import { defineStore } from 'pinia'
import type { HomeState } from './type'
import { getHomeCategories, getHomeHotSuggests } from '@/api'

export const useHomeStore = defineStore('home', {
  state: (): HomeState => ({
    hotSuggests: [],
  }),
  actions: {
    async fetchHotSuggestsData() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res
    },
  },
})
