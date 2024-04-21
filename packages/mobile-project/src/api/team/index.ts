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

/**
 * 获取队伍列表
 * @param teamQueryDTO
 * @returns
 */
export function getListTeams(teamQueryDTO: any) {
  return xhRequest.get<any>({
    headers: new AxiosHeaders(),
    url: '/user/team/list',
    params: teamQueryDTO,
  })
}

/**
 * 获取我创建的队伍列表
 * @param teamQueryDTO
 * @returns
 */
export function getListMyCreateTeams(teamQueryDTO: any) {
  return xhRequest.get<any>({
    headers: new AxiosHeaders(),
    url: '/user/team/list/my/create',
    params: teamQueryDTO,
  })
}

/**
 * 加入队伍
 * @param teamJoinDTO
 * @returns
 */
export function joinTeam(teamJoinDTO: any) {
  return xhRequest.post<any>({
    headers: new AxiosHeaders(),
    url: '/user/team/join',
    data: teamJoinDTO,
  })
}
