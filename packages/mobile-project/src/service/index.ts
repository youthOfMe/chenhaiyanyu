import { AxiosHeaders } from 'axios'
import { TIME_OUT } from './config'
import { BASE_URL } from './config'
import XHRequest from './request'

const xhRequest = new XHRequest({
  headers: new AxiosHeaders(),
  baseURL: BASE_URL,
  timeout: TIME_OUT,
})

export default xhRequest
