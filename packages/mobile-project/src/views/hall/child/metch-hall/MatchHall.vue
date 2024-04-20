<template>
  <div class="match-hall">
    <div class="carousel">
      <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in appImgList" :key="item.id">
          <img :src="item.imageUrl" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-grid square class="nav-content">
      <van-grid-item
        text="匹配搭子"
        icon="shrink"
        icon-color="var(--primary-color)"
        @click="goMatchFriend"
      ></van-grid-item>
      <van-grid-item
        text="编程学习"
        icon="apps-o"
        icon-color="var(--primary-color)"
      ></van-grid-item>
      <van-grid-item
        text="创建队伍"
        icon="cluster-o"
        icon-color="var(--primary-color)"
      ></van-grid-item>
      <van-grid-item
        text="匹配组队"
        icon="friends-o"
        icon-color="var(--primary-color)"
      ></van-grid-item>
    </van-grid>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores'

// 跳转路由
const router = useRouter()
// 跳转到匹配搭子页面
const goMatchFriend = () => {
  router.push('/match/friend')
}

// 获取轮播图数据
const appStore = useAppStore()
const { appImgList } = storeToRefs(appStore)
appStore.fetchAppImgListByType(1)
</script>

<style lang="scss" scoped>
.match-hall {
  position: relative;
  overflow-y: auto;
  height: calc(100vh - 50px - 124px);
  .carousel {
    margin: 14px 9px 0;
    .swipe {
      height: 163px;
      img {
        width: 100%;
      }
    }
  }
  .nav-content {
    --van-text-color: var(--primary-color) !important;
    .van-grid-item__text {
      --van-text-color: var(--primary-color) !important;

      color: var(--primary-color) !important;
    }

    margin: 0 9px;
    background-color: #ffffff;
  }
}
</style>
