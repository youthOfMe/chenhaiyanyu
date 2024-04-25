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
        @click="goCreateContingent"
      ></van-grid-item>
      <van-grid-item
        text="匹配组队"
        icon="friends-o"
        icon-color="var(--primary-color)"
        @click="goMatchContingent"
      ></van-grid-item>
    </van-grid>
    <div class="content">
      <MatchCardV1
        v-for="item in userList"
        :key="item.id"
        :item="item"
      ></MatchCardV1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores'

// 跳转路由
const router = useRouter()
// 跳转到匹配搭子页面
const goMatchFriend = () => {
  router.push('/match/friend')
}
// 跳转到创建队伍的页面
const goCreateContingent = () => {
  router.push('/create/contingent')
}
// 跳转到匹配组队的页面
const goMatchContingent = () => {
  router.push('/match/contingent')
}

// 获取轮播图数据
const appStore = useAppStore()
const { appImgList } = storeToRefs(appStore)
appStore.fetchAppImgListByType(1)

// 准备分页查询数据
const pageQueryDTO = ref({
  page: 1,
  pageSize: 10,
})
// 获取推荐搭子数据
const userStore = useUserStore()
const { userList } = storeToRefs(userStore)
userStore.fetchPageUserList(pageQueryDTO.value)
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
  .content {
    margin: 0 9px;
  }
}
</style>
