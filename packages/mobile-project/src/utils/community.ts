// 封装本地存储数据与读取数据的方法

// 1. 维护板块ID
// 存储数据
export const SET_CATEGORY_ID = (categoryId: number) => {
  localStorage.setItem('CATEGORY_ID', String(categoryId))
}

// 本地获取数据
export const GET_CATEGORY_ID = () => {
  return Number(localStorage.getItem('CATEGORY_ID'))
}

// 本地存储删除数据的方法
export const REMOVE_CATEGORY_ID = () => {
  localStorage.removeItem('CATEGORY_ID')
}

// 2. 维护帖子ID
// 存储数据
export const SET_POST_ID = (postId: string) => {
  localStorage.setItem('POST_ID', postId)
}

// 本地获取数据
export const GET_POST_ID = () => {
  return localStorage.getItem('POST_ID')
}

// 本地存储删除数据的方法
export const REMOVE_POST_ID = () => {
  localStorage.removeItem('POST_ID')
}
