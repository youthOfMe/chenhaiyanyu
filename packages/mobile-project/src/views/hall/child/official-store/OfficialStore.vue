<template>
  <div class="official-store">
    <div class="carousel">
      <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img :src="getAssetURL('hall/shop-one.jpg')" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="getAssetURL('home/head.jpg')" alt="" />
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
      <van-grid-item text="商品" @click="goCategory">
        <SvgIcon
          name="hallOfficailShop-category"
          width="50px"
          height="50px"
        ></SvgIcon>
        <div class="grid-text">商品分类</div>
      </van-grid-item>
      <van-grid-item
        v-for="value in 3"
        :key="value"
        icon="photo-o"
        text="优惠券"
      />
    </van-grid>
    <ShopInfoCard></ShopInfoCard>
    <div class="list">
      <CommodityCardV1></CommodityCardV1>
      <CommodityCardV1></CommodityCardV1>
    </div>
    <div class="block"></div>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
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
  settingStore.hallTabBarIndex = 1
})

const router = useRouter()
// 跳转页面到商品分类
const goCategory = () => {
  router.push('/chshopCategory')
}
</script>

<style lang="scss" scoped>
.official-store {
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
  .grid-text {
    margin-top: 5px;
    color: var(--primary-color);
  }
}
.list {
  display: flex;
  justify-content: space-evenly;
  margin: 14px 9px 0;
  background-color: #ffffff;
}
.block {
  height: 20px;
}
</style>
