import { getUserInfo, login } from '@/api/login'
import { GET_TOKEN, REMOVE_TOKEN, SET_TOKEN } from '@/utils/token'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: (): any => ({
    token: GET_TOKEN(),
    username: '',
    userInfo: {},
  }),
  actions: {
    // 登录
    async fetchLogin(params: any) {
      const res = await login(params)
      if (res.code === 1) {
        this.token = res.data.token
        SET_TOKEN(this.token)
        return 'ok'
      } else return Promise.reject(new Error(res.data.msg))
    },
    // 获取用户昵称
    async fetchUserName() {
      const res = await getUserInfo()
      if (res.code === 1) {
        this.username = res.data.name
        return 'ok'
      } else return Promise.reject(res.data.msg)
    },
    // 获取用户信息
    async fetchUserInfo() {
      const res = await getUserInfo()
      if (res.code === 1) {
        this.userInfo = res.data
        return 'ok'
      } else return Promise.reject(res.data.msg)
    },
    // 退出登录
    userLogout() {
      this.token = ''
      this.username = ''
      this.avatar = ''
      REMOVE_TOKEN()
    },
  },
})
