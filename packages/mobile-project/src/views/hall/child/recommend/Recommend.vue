<template>
  <div class="recommend">
    <div class="carousel">
      <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in appImgList" :key="item.id">
          <img :src="item.imageUrl" alt="" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <van-grid square class="nav-content">
      <van-grid-item
        text="低代码平台"
        icon="shrink"
        icon-color="var(--primary-color)"
        @click="goLowCode"
      ></van-grid-item>
      <van-grid-item
        text="编程学习"
        icon="apps-o"
        icon-color="var(--primary-color)"
      ></van-grid-item>
      <van-grid-item
        text="云控中心"
        icon="cluster-o"
        icon-color="var(--primary-color)"
        @click="goCloud"
      ></van-grid-item>
      <van-grid-item
        text="智能BI"
        icon="bar-chart-o"
        icon-color="var(--primary-color)"
        @click="goAIBI"
      ></van-grid-item>
      <van-grid-item
        text="匹配组队"
        icon="friends-o"
        icon-color="var(--primary-color)"
        @click="goMatch"
      ></van-grid-item>
      <van-grid-item
        text="代码生成"
        icon="passed"
        icon-color="var(--primary-color)"
        @click="goWenXin"
      ></van-grid-item>
      <van-grid-item
        text="图片识别"
        icon="photo-o"
        icon-color="var(--primary-color)"
      ></van-grid-item>
      <van-grid-item
        text="AI聊天"
        icon="manager-o"
        icon-color="var(--primary-color)"
      ></van-grid-item>
    </van-grid>
    <div class="good-post">
      <div class="content-title">优质帖子</div>
      <div class="content">
        <GoodPostBlock
          v-for="item in postList"
          :key="item.id"
          :item="item"
        ></GoodPostBlock>
      </div>
    </div>
    <div class="good-seller">
      <div class="content-title">优质商品</div>
      <div class="content">
        <GoodPostBlock></GoodPostBlock>
        <GoodPostBlock></GoodPostBlock>
        <GoodPostBlock></GoodPostBlock>
      </div>
    </div>
    <div class="list">
      <PostBlock
        v-for="item in postList"
        :key="item.id"
        :postItem="item"
      ></PostBlock>
    </div>
    <div class="block"></div>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useSettingStore, useAppStore, useCommunityStore } from '@/stores'
import { getAssetURL } from '@/utils/LoadAssetsImg.js'

// 持久化页面 可抽取为hooks
const settingStore = useSettingStore()
const { tabbarData } = storeToRefs(settingStore)
const route = useRoute()
const path = route.path
onUnmounted(() => {
  settingStore.tabbarData[1].path = path
  settingStore.hallTabBarIndex = 0
})

// 页面跳转
const router = useRouter()
// 跳转到低代码平台
const goLowCode = () => {
  window.open('http://520.nxxd.cn/', '_blank')
}
// 跳转到云空中心
const goCloud = () => {
  window.open('https://github.com/youthOfMe/Cloud-Control-Center', '__blank')
}
// 跳转到智能BI
const goAIBI = () => {
  router.push('/aibi')
}
// 跳转到匹配组队
const goMatch = () => {
  router.push('/match/contingent')
}
// 跳转到代码生成
const goWenXin = () => {
  window.open('https://yiyan.baidu.com/welcome', '_blank')
}
// 跳转到图片识别
// 跳转到AI聊天

// 获取轮播图数据
const appStore = useAppStore()
const { appImgList } = storeToRefs(appStore)
appStore.fetchAppImgListByType(1)

// 获取推荐帖子列表
const communityStore = useCommunityStore()
const { postList } = storeToRefs(communityStore)
communityStore.fetchPostListById(undefined, 1)
</script>

<style lang="scss" scoped>
.recommend {
  position: relative;
  overflow-y: auto;
  height: calc(100vh - 50px - 124px);
}
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
.good-post {
  margin: 14px 9px 0;
  padding: 10px 0 0 10px;
  background-color: #ffffff;
  .content-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--third-color);
  }
  .content {
    display: flex;
    overflow-x: auto;
    margin-top: 8px;
    padding: 0 10px 20px;
    &::-webkit-scrollbar {
      display: none;
    }
    > div {
      margin-right: 10px;
    }
  }
}
.good-seller {
  margin: 14px 9px 0;
  padding: 10px 0 0 10px;
  background-color: #ffffff;
  .content-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--third-color);
  }
  .content {
    display: flex;
    overflow-x: auto;
    margin-top: 8px;
    padding: 0 10px 20px;
    &::-webkit-scrollbar {
      display: none;
    }
    > div {
      margin-right: 10px;
    }
  }
}
.list {
  margin: 14px 9px 0;
  border-radius: 12px;
}
.block {
  height: 20px;
}
</style>
