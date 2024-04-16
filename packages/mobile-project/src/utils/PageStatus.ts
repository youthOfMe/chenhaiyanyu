// 维护页面状态

// 存储数据
export const SET_PAGE_STATUS = (pageIndex: number) => {
  localStorage.setItem('PAGE_STATUS', String(pageIndex))
}

// 本地存储获取数据
export const GET_PAGE_STATUS = () => {
  return Number(localStorage.getItem('PAGE_STATUS'))
}

// 本地删除存储数据的方法
export const REMOVE_TOKEN = () => {
  localStorage.removeItem('PAGE_STATUS')
}
