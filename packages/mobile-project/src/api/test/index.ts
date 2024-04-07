import hyRequest from '@/service'

export function getCityAll() {
  return hyRequest.get<any>({
    url: '/city/all',
  })
}
