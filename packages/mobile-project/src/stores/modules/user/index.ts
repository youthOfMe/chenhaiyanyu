import { getUserInfo, login } from '@/api/login'
import { GET_TOKEN, REMOVE_TOKEN, SET_TOKEN } from '@/utils/token'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: (): any => ({
    token: GET_TOKEN(),
    username: '',
  }),
  actions: {
    async fetchLogin(params: any) {
      const res = await login(params)
      if (res.code === 1) {
        this.token = res.data.token
        SET_TOKEN(this.token)
        return 'ok'
      } else return Promise.reject(new Error(res.data.msg))
    },
    async fetchUserInfo() {
      const res = await getUserInfo()
      if (res.code === 1) {
        this.username = res.data.name
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
