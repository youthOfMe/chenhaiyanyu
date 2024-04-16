// 封装本地存储数据与读取数据的方法

// 存储数据
export const SET_TOKEN = (token: string) => {
  localStorage.setItem('TOKEN', token)
  localStorage.setItem('TOKEN_IM', 'Bearer ' + token)
}

// 本地存储获取数据
export const GET_TOKEN = () => {
  return localStorage.getItem('TOKEN')
}
export const GET_IM_TOKEN = () => {
  return localStorage.getItem('TOKEN_IM')
}

// 本地存储删除数据的方法
export const REMOVE_TOKEN = () => {
  localStorage.removeItem('TOKEN')
}
export const REMOVE_IM_TOKEN = () => {
  localStorage.removeItem('TOKEN_IM')
}
