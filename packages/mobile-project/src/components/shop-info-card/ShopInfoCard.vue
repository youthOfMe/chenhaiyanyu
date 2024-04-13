<template>
  <div class="shop-info-card">
    <div class="content-title">店铺介绍</div>
    <div class="content">
      <div class="base-info">
        <img :src="getAssetURL('home/head.jpg')" @click="toPersonInfo" alt="" />
        <div class="info">
          <div class="name-title">
            <span class="name">辰海烟雨官方店铺</span>
            <SvgIcon name="hallOfficailShop-right"></SvgIcon>
          </div>
          <div class="label">
            <van-tag type="primary" plain class="label-main">金牌店铺</van-tag>
            <span class="sales">已售 8888</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAssetURL } from '@/utils/LoadAssetsImg.js'
</script>

<style lang="scss" scoped>
.shop-info-card {
  margin: 14px 9px 0;
  padding: 10px 0 0 10px;
  background-color: #ffffff;
  .content-title {
    font-size: 18px;
    font-weight: 600;
    color: var(--third-color);
  }
  .content {
    .base-info {
      display: flex;
      margin-top: 10px;
      padding-bottom: 10px;
      img {
        width: 68px;
        height: 68px;
        border-radius: 50%;
      }
      .info {
        padding-top: 10px;
        padding-left: 15px;
        .name-title {
          .name {
            margin-right: 5px;
            font-size: 18px;
            font-weight: 600;
            color: var(--third-color);
          }
        }
        .label {
          display: flex;
          margin-top: 5px;
          .label-main {
            margin-right: 5px;
          }
          .sales {
            font-size: 12px;
            color: var(--second-color);
          }
        }
      }
    }
  }
}
</style>
