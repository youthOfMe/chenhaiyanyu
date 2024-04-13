import { login } from '@/api/login'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: (): any => ({
    token: '',
  }),
  actions: {
    async fetchLogin(params: any) {
      const res = await login(params)
      this.token = res.data.token
    },
  },
})
