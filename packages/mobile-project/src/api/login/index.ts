import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

/**
 * 用户登录
 * @param data
 * @returns
 */
export function login(data: any) {
  return xhRequest.post<any>({
    headers: new AxiosHeaders(),
    url: '/user/user/login',
    data,
  })
}

/**
 * 获取用户信息
 * @returns
 */
export function getUserInfo() {
  return xhRequest.get<any>({
    headers: new AxiosHeaders(),
    url: '/user/user/userInfo',
  })
}

/**
 * 手机号注册
 * @param data
 * @returns
 */
export function register(data: any) {
  return xhRequest.post<any>({
    headers: new AxiosHeaders(),
    url: '/user/user/register',
    data,
  })
}

/**
 * 获取验证码
 * @param phone
 * @returns
 */
export function getVeriCode(mobile: string) {
  return xhRequest.post<any>({
    headers: new AxiosHeaders(),
    url: '/user/user/verifiCode',
    params: {
      mobile,
    },
  })
}
