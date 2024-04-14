<template>
  <div class="hall">
    <TopBarMain
      themeColor="var(--primary-color)"
      :isHeadImgDisplay="false"
      :tabBarData="tabBarData"
      :hallTabBarIndex="hallTabBarIndex"
    ></TopBarMain>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useSettingStore } from '@/stores'
const tabBarData = [
  {
    title: '推荐',
    path: '/hall/recommend',
  },
  {
    title: '官方店铺',
    path: '/hall/officialStore',
  },
  {
    title: '编程导航',
    path: '/hall/codeNavigation',
  },
  {
    title: '接单大厅',
    path: '/hall/takeOrder',
  },
  {
    title: '匹配大厅',
    path: '/hall/navigation',
  },
]

// 持久化tab-bar状态
const settingStore = useSettingStore()
const { hallTabBarIndex } = storeToRefs(settingStore)
</script>

<style lang="scss" scoped></style>
