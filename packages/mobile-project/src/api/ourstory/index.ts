import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

export function getOurStoryColumnList() {
  return xhRequest.get<any>({
    headers: new AxiosHeaders(),
    url: '/user/ourstory/columnlist',
  })
}