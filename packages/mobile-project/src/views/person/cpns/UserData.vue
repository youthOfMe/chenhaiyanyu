<template>
  <div class="userData">
    <TopBarUserData
      :isHeadImgDisplay="false"
      :tabBarData="tabBarData"
      :hallTabBarIndex="hallTabBarIndex"
    ></TopBarUserData>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const back = () => {
  router.back()
}
const tabBarData = [
  {
    title: '获赞和收藏',
    path: '/userData/likeFavorite',
  },
  {
    title: '粉丝',
    path: '/userData/fans',
  },
  {
    title: '关注',
    path: '/userData/follow',
  },
  {
    title: '动态',
    path: '/userData/dynamic',
  },
]
</script>

<style lang="scss" scoped>
.userData {
  display: flex;
  flex-direction: column;
  background-color: rgb(255 255 255);
}
</style>
