import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

/**
 * 创建队伍
 * @param teamDTO
 * @returns
 */
export function createTeam(teamDTO: any) {
  return xhRequest.post<any>({
    headers: new AxiosHeaders(),
    url: '/user/team/add',
    data: teamDTO,
  })
}
