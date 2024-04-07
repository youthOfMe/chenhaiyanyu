import xhRequest from '@/service'
import type { HotSuggests } from '@/types'
import { AxiosHeaders } from 'axios'

export function getHomeHotSuggests() {
  console.log(666)

  return xhRequest.get<HotSuggests>({
    headers: new AxiosHeaders(),
    url: '/home/hotSuggests',
  })
}

export function getHomeCategories() {
  return xhRequest.get({
    headers: new AxiosHeaders(),
    url: '/home/categories',
  })
}
