import { defineStore } from 'pinia'
import { getCategoryList, getParentCategoryList, getPostListById } from '@/api'
import { GET_CATEGORY_ID } from '@/utils/community'

export const useCommunityStore = defineStore('community', {
  state: (): any => ({
    parentList: [],
    categoryList: [],
    postList: [],
    // 维护点击状态 维护到本地
    categoryId: GET_CATEGORY_ID() || 0,
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
    // 根据板块ID获取帖子列表
    async fetchPostListById(categoryId: number) {
      const res = await getPostListById(categoryId)
      if (res.code === 1) {
        this.postList = res.data
        return
      }
      return Promise.reject(res.msg)
    },
  },
})
