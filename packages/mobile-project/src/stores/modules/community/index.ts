import { defineStore } from 'pinia'
import {
  getCategoryList,
  getParentCategoryList,
  getPostDetail,
  getPostListById,
} from '@/api'
import { GET_CATEGORY_ID, GET_POST_ID } from '@/utils/community'

export const useCommunityStore = defineStore('community', {
  state: (): any => ({
    parentList: [],
    categoryList: [],
    postList: [],
    // 维护点击状态 维护到本地
    categoryId: GET_CATEGORY_ID() || 0,
    // 维护帖子ID 维护到本地
    postId: GET_POST_ID() || 0,
    postDetail: {},
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
    async fetchPostListById(
      categoryId: number | undefined,
      recommended?: number,
    ) {
      const res = await getPostListById(categoryId, recommended)
      if (res.code === 1) {
        this.postList = res.data
        return
      }
      return Promise.reject(res.msg)
    },
    // 根据帖子ID获取帖子详情
    async fetchPostDetailById(id: string) {
      const res = await getPostDetail(id)
      if (res.code === 1) {
        this.postDetail = res.data
        this.postDetail.content = this.postDetail.content.replace(
          /\n|\r\n/g,
          '<br>',
        )
        return
      }
      return Promise.reject(res.msg)
    },
  },
})
