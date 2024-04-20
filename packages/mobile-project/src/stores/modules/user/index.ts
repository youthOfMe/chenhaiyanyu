import {
  getUserInfo,
  login,
  resetUserInfo,
  getFriendList,
  pageQueryUserList,
  searchUsersByTags,
} from '@/api'
import {
  GET_IM_TOKEN,
  GET_TOKEN,
  REMOVE_IM_TOKEN,
  REMOVE_TOKEN,
  SET_TOKEN,
} from '@/utils/token'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: (): any => ({
    token: GET_TOKEN(),
    token_im: GET_IM_TOKEN(),
    username: '',
    userInfo: {},
    userList: [],
    searchUsersByTagList: [],
  }),
  actions: {
    // 登录
    async fetchLogin(params: any) {
      const res = await login(params)
      if (res.code === 1) {
        this.token = res.data.token
        SET_TOKEN(this.token)
        return 'ok'
      } else return Promise.reject(new Error(res.msg))
    },
    // 获取用户昵称
    async fetchUserName() {
      const res = await getUserInfo()
      if (res.code === 1) {
        this.username = res.data.name
        return 'ok'
      } else return Promise.reject(res.msg)
    },
    // 获取用户信息
    async fetchUserInfo() {
      const res = await getUserInfo()
      if (res.code === 1) {
        this.userInfo = res.data
        return 'ok'
      } else return Promise.reject(res.msg)
    },
    // 修改用户信息
    async fetchResetUserInfo(data: any) {
      const res = await resetUserInfo(data)
      if (res.code === 1) {
        this.userInfo.name = res.data.name
        return 'ok'
      } else return Promise.reject(res.msg)
    },
    // 获取联系人信息
    async fetchFrientList(cursor?: string, pageSize?: number) {
      const res = await getFriendList()
    },
    // 分页获取用户数据(推荐搭子)
    async fetchPageUserList(pageQueryDTO: any) {
      const res = await pageQueryUserList(pageQueryDTO)
      this.userList = res.data.records
    },
    // 根据标签获取用户
    async fetchUsersByTagList(tagNameList: any) {
      const res = await searchUsersByTags(tagNameList)
      this.searchUsersByTagList = res.data
    },
    // 退出登录
    userLogout() {
      this.token = ''
      this.username = ''
      this.avatar = ''
      REMOVE_TOKEN()
      REMOVE_IM_TOKEN()
    },
  },
})
