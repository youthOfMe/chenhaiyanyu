import { getListMyCreateTeams, getListTeams } from '@/api'
import { defineStore } from 'pinia'

export const useTeamStore = defineStore('team', {
  state: (): any => ({
    teamList: [],
    myTeamList: [],
  }),
  actions: {
    async fetchTeamList(teamQueryDTO: any) {
      const res = await getListTeams(teamQueryDTO)
      this.teamList = res.data
    },
    async fetchMyTeamList(teamQueryDTO: any) {
      const res = await getListMyCreateTeams(teamQueryDTO)
      this.myTeamList = res.data
    },
  },
})
