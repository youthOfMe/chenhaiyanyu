<template>
  <div class="code-web-card">
    <SvgIcon
      name="common-left"
      width="25px"
      height="30px"
      class="left"
    ></SvgIcon>

    <van-swipe class="swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item class="item">
        <img
          class="bg-img"
          :src="getAssetURL('code-navigation/github.jpg')"
          alt=""
        />
      </van-swipe-item>
      <van-swipe-item class="item">
        <img
          class="bg-img"
          :src="getAssetURL('code-navigation/github.jpg')"
          alt=""
        />
      </van-swipe-item>
      <van-swipe-item class="item">
        <img
          class="bg-img"
          :src="getAssetURL('code-navigation/github.jpg')"
          alt=""
        />
      </van-swipe-item>
      <van-swipe-item class="item">
        <img
          class="bg-img"
          :src="getAssetURL('code-navigation/github.jpg')"
          alt=""
        />
      </van-swipe-item>
    </van-swipe>
    <SvgIcon
      name="common-right"
      width="25px"
      height="30px"
      class="right"
    ></SvgIcon>
  </div>
</template>

<script setup lang="ts">
import { getAssetURL } from '@/utils/LoadAssetsImg.js'
</script>

<style lang="scss" scoped>
.code-web-card {
  position: relative;
  padding: 10px 0;
  .left {
    position: absolute;
    top: 50%;
    translate: 0 -15px;
    left: 5px;
    z-index: 555;
  }
  .right {
    position: absolute;
    top: 50%;
    translate: 0 -15px;
    right: 5px;
  }
  .swipe {
    flex: 1;
    .item {
      .bg-img {
        width: 100%;
        height: 160px;
      }
    }
  }
}
</style>
