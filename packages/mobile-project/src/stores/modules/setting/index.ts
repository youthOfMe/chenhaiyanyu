import { defineStore } from 'pinia'

export const useSettingStore = defineStore('setting', {
  state: (): any => ({
    tabbarData: [
      {
        name: '首页',
        image: 'tabbar-home',
        imageActive: 'tabbar-home-active',
        path: '/home',
      },
      {
        text: '大厅',
        image: 'tabbar-hall',
        imageActive: 'tabbar-hall-active',
        path: '/hall/recommend',
      },
      {
        text: '社区',
        image: 'tabbar-community',
        imageActive: 'tabbar-community-active',
        path: '/community',
      },
      {
        text: '个人',
        image: 'tabbar-person',
        imageActive: 'tabbar-person-active',
        path: '/person',
      },
    ],
    hallTabBarIndex: 0,
  }),
})
