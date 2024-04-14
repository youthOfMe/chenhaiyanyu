import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

export function login(data: any) {
  return xhRequest.post<any>({
    headers: new AxiosHeaders(),
    url: '/user/user/login',
    data,
  })
}
