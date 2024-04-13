<template>
  <div class="topbar-head-v1">
    <SvgIcon
      name="personinfo-back"
      width="20px"
      height="20px"
      @click="back"
    ></SvgIcon>
    <div class="block">
      <div class="base-info">
        <img
          :src="getAssetURL('home/home-bg.jpg')"
          @click="toPersonInfo"
          alt=""
        />
        <div class="info">
          <div class="name-title">
            <span class="name nowrap_ellipsis">我是牛马你记住</span>
          </div>
          <div class="signature">
            <span>在线</span>
            <span class="text nowrap_ellipsis">爱已随风起, 风止意难平</span>
          </div>
        </div>
      </div>
    </div>
    <SvgIcon name="personinfo-more" width="25px" height="25px"></SvgIcon>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { getAssetURL } from '@/utils/LoadAssetsImg.js'

const router = useRouter()
const back = () => {
  router.back()
}
</script>

<style lang="scss" scoped>
.topbar-head-v1 {
  display: flex;
  align-items: center;
  padding: 0 9px;
  background-color: var(--primary-color);
  .block {
    padding: 15px 9px;
    flex: 1;
    .base-info {
      display: flex;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .info {
        padding-top: 5px;
        padding-left: 15px;
        .name-title {
          .name {
            font-size: 18px;
            font-weight: 600;
            color: #ffffff;
          }
        }
        .signature {
          margin-top: 5px;
          font-size: 12px;
          font-weight: normal;
          color: #ffffff;
          .text {
            padding-left: 5px;
          }
        }
      }
    }
  }
}
</style>
