import { AxiosHeaders } from 'axios'
import { TIME_OUT } from './config'
import { BASE_URL, BASE_URL_IM } from './config'
import XHRequest from './request'

const xhRequest = new XHRequest({
  headers: new AxiosHeaders(),
  baseURL: BASE_URL,
  timeout: TIME_OUT,
})

export const xhImRequest = new XHRequest({
  headers: new AxiosHeaders(),
  baseURL: BASE_URL_IM,
  timeout: TIME_OUT,
})

export default xhRequest
