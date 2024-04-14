import { login } from '@/api/login'
import { SET_TOKEN } from '@/utils/token'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: (): any => ({
    token: '',
    username: '',
  }),
  actions: {
    async fetchLogin(params: any) {
      const res = await login(params)
      if (res.code === 1) {
        this.token = res.data.token
        SET_TOKEN(this.token)
        return 'ok'
      } else return Promise.reject(new Error(res.data.message))
    },
    async fetchUserInfo() {},
  },
})
