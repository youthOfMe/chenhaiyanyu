import { getListTeams } from '@/api'
import { defineStore } from 'pinia'

export const useTeamStore = defineStore('team', {
  state: (): any => ({
    teamList: [],
  }),
  actions: {
    async fetchTeamList(teamQueryDTO: any) {
      const res = await getListTeams(teamQueryDTO)
      this.teamList = res.data
    },
  },
})
