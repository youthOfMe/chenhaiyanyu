import { getOurStoryColumnList, getOurStoryPostList } from '@/api'
import { defineStore } from 'pinia'

export const useOurStoryStore = defineStore('ourStory', {
  state: (): any => ({
    columnList: [],
    postList: [],
  }),
  actions: {
    async fetchColumnList() {
      const res = await getOurStoryColumnList()
      this.columnList = res.data
    },
    async fetchPostList() {
      const res = await getOurStoryPostList()
      this.postList = res.data
    },
  },
})
