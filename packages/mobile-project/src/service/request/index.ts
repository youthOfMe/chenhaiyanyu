import type { AxiosInstance } from 'axios'
import type { XHRequestConfig } from './type'
import axios from 'axios'
import { useUserStore } from '@/stores'

class XHRequest {
  instance: AxiosInstance

  // request实例 => axios实例
  constructor(config: XHRequestConfig) {
    this.instance = axios.create(config)

    // 每个instance实例都添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 获取token
        const { token, token_im } = useUserStore()
        if (token) config.headers.authentication = token
        if (token_im) config.headers.Authorization = token_im
        return config
      },
      (err) => {
        return err
      },
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log(res)

        return res.data
      },
      (err) => {
        return err
      },
    )

    // 针对特定的xhRequest实例添加拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFunc,
      config.interceptors?.requestFailureFunc,
    )
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFunc,
      config.interceptors?.responseFailureFunc,
    )
  }

  // 封装网络请求的方法
  request<T = any>(config: XHRequestConfig<T>) {
    // 单次请求的成功拦截处理
    config = config.interceptors?.requestSuccessFunc
      ? config.interceptors.requestSuccessFunc(config)
      : config

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          res = config.interceptors?.responseSuccessFunc
            ? config.interceptors.responseSuccessFunc(res)
            : res
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  // 进行封装其他网络请求
  get<T = any>(config: XHRequestConfig<T>) {
    return this.request({ ...config, method: 'GET' })
  }

  post<T = any>(config: XHRequestConfig<T>) {
    return this.request({ ...config, method: 'POST' })
  }

  delete<T = any>(config: XHRequestConfig<T>) {
    return this.request({ ...config, method: 'DELETE' })
  }

  put<T = any>(config: XHRequestConfig<T>) {
    return this.request({ ...config, method: 'PUT' })
  }

  patch<T = any>(config: XHRequestConfig<T>) {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default XHRequest
