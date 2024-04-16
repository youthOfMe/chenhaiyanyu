// 持久化本地订单数据

// 存储数据
export const SET_ORDER_INFO = (orderInfo: object) => {
  localStorage.setItem('ORDER_INFO', JSON.stringify(orderInfo))
}

// 本地存储获取数据
export const GET_ORDER_INFO = () => {
  return JSON.parse(localStorage.getItem('ORDER_INFO')!)
}

// 本地存储删除数据
export const REMOVE_ORDER_INFO = () => {
  localStorage.removeItem('ORDER_INFO')
}
