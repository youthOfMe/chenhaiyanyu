import { getOurStoryColumnList } from '@/api'
import { defineStore } from 'pinia'

export const useOurStoryStore = defineStore('ourStory', {
  state: (): any => ({
    columnList: [],
  }),
  actions: {
    async fetchColumnList() {
      const res = await getOurStoryColumnList()
      this.columnList = res.data
    },
  },
})
