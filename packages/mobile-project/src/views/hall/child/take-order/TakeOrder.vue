<template>
  <div class="take-order">
    <div class="carousel">
      <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img :src="getAssetURL('take-out/two.png')" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="getAssetURL('take-out/five.png')" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="getAssetURL('home/head-bg.jpg')" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/img/home/home-bg.jpg" alt="" />
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
        @click="goImage"
      ></van-grid-item>
      <van-grid-item
        text="AI聊天"
        icon="manager-o"
        icon-color="var(--primary-color)"
        @click="goAiChart"
      ></van-grid-item>
    </van-grid>
    <van-tabs v-model:active="active" class="tabs">
      <van-tab>
        <template #title>
          <van-icon name="more-o" />
          官方接单
        </template>
        <div class="official-list">
          <CodeOrderCardV1 v-for="i in 3" :key="i"></CodeOrderCardV1>
        </div>
      </van-tab>
      <van-tab>
        <template #title>
          <van-icon name="more-o" />
          民间接单
        </template>
        <div class="official-list">
          <CodeOrderCardV1 v-for="i in 3" :key="i"></CodeOrderCardV1>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useSettingStore } from '@/stores'
import { getAssetURL } from '@/utils/LoadAssetsImg.js'

// 持久化页面 可抽取为hooks
const settingStore = useSettingStore()
const { tabbarData } = storeToRefs(settingStore)
const route = useRoute()
const path = route.path
onUnmounted(() => {
  settingStore.tabbarData[1].path = path
  settingStore.hallTabBarIndex = 3
})
</script>

<style lang="scss" scoped>
.take-order {
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
  margin: 0 9px;
  background-color: #ffffff;
}
.tabs {
  margin: 10px 9px 0;
  background-color: #ffffff;
  .officail-list {
    padding-top: 5px;
  }
}
</style>
