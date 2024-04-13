import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

export function login(params: any) {
  return xhRequest.post<any>({
    headers: new AxiosHeaders(),
    url: '/user/user/login',
    params,
  })
}
