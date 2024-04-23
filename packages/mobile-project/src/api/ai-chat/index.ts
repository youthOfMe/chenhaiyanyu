import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

/**
 * AI智能聊天
 * @param message
 * @returns
 */
export function getAiChat(message: string) {
  return xhRequest.get<any>({
    headers: new AxiosHeaders(),
    url: '/user/aichat/chat',
    params: {
      message,
    },
  })
}
