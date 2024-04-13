<template>
  <div class="hall">
    <TopBarMain
      themeColor="var(--primary-color)"
      :isHeadImgDisplay="false"
      :tabBarData="tabBarData"
    ></TopBarMain>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
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
    title: '推荐',
    path: '/hall/recommend',
  },
  {
    title: '推荐',
    path: '/hall/recommend',
  },
]
</script>

<style lang="scss" scoped></style>
