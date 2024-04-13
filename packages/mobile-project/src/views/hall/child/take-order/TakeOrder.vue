<template>
  <div class="take-order">
    <div class="carousel">
      <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img :src="getAssetURL('home/head-bg.jpg')" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="getAssetURL('home/head-bg.jpg')" alt="" />
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
        v-for="value in 8"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
    <van-tabs v-model:active="active" class="tabs">
      <van-tab>
        <template #title>
          <van-icon name="more-o" />
          官方接单
        </template>
        内容 {{ index }}
      </van-tab>
      <van-tab>
        <template #title>
          <van-icon name="more-o" />
          民间接单
        </template>
        内容 {{ index }}
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
}
</style>
