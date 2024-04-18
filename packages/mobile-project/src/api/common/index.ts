import xhRequest from '@/service'
import { AxiosHeaders } from 'axios'

/**
 * 用户端文件上传
 * @param formData
 * @returns
 */
export function userUpload(formData: FormData, category: string) {
  return xhRequest.post({
    url: '/user/common/upload',
    data: formData,
    params: {
      category,
    },
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
