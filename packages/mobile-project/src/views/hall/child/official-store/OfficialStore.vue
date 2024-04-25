<template>
  <div class="official-store">
    <div class="carousel">
      <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img :src="getAssetURL('shop/one.png')" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="getAssetURL('shop/two.png')" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="getAssetURL('shop/three.png')" alt="" />
        </van-swipe-item>
        <van-swipe-item>
          <img :src="getAssetURL('shop/four.png')" alt="" />
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
      <van-grid-item text="商品" @click="goSetmeal">
        <SvgIcon
          name="hallOfficailShop-setmeal"
          width="50px"
          height="50px"
        ></SvgIcon>
        <div class="grid-text">特惠套餐</div>
      </van-grid-item>
      <van-grid-item text="商品" @click="goAllCommodity">
        <SvgIcon
          name="hallOfficailShop-commodity"
          width="50px"
          height="50px"
        ></SvgIcon>
        <div class="grid-text">全部商品</div>
      </van-grid-item>
      <van-grid-item text="商品" @click="goSetmeal">
        <SvgIcon
          name="hallOfficailShop-shop"
          width="50px"
          height="50px"
        ></SvgIcon>
        <div class="grid-text">店铺信息</div>
      </van-grid-item>
    </van-grid>
    <ShopInfoCard></ShopInfoCard>
    <div class="list">
      <template v-for="item in commodityPageList.records" :key="item.id">
        <CommodityCardV1
          :info="item"
          @click="goDetail(item.id)"
        ></CommodityCardV1>
      </template>
    </div>
    <div class="block"></div>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useSettingStore, useOfficailShopStore } from '@/stores'
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
// 跳转页面到特惠套餐
const goSetmeal = () => {
  router.push('/chshopSetmeal')
}
// 跳转到全部商品界面
const goAllCommodity = () => {
  router.push('/allCommodity')
}

// 展示商品数据
const officialShopStore = useOfficailShopStore()
officialShopStore.fetchCommodityPageList({
  page: 1,
  pageSize: 10,
})
const { commodityPageList } = storeToRefs(officialShopStore)

// 点击商品卡片
const goDetail = (id) => {
  router.push(`/commodity/${id}`)
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
  flex-wrap: wrap;
  margin: 14px 9px 0;
  background-color: #ffffff;
}
.block {
  height: 20px;
}
</style>
