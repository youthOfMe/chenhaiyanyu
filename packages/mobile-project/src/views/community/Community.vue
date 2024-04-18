<template>
  <div class="community">
    <TopBarMain
      themeColor="var(--primary-color)"
      :isHeadImgDisplay="false"
      :tabBarData="tabBarData"
    ></TopBarMain>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: 'community',
}
</script>
<script lang="ts" setup>
const tabBarData = [
  {
    title: '推荐',
    path: '/community/recommend',
  },
  {
    title: '全部板块',
    path: '/community/all',
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
</script>

<style lang="scss" scoped></style>
