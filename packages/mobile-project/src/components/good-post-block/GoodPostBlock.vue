<template>
  <div class="good-post-block">
    <img :src="getAssetURL('home/head.jpg')" alt="" class="big-img" />
    <div class="content">
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
          <div class="signature nowrap_ellipsis">爱已随风起, 风止意难平</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAssetURL } from '@/utils/LoadAssetsImg.js'
</script>

<style lang="scss" scoped>
.big-img {
  width: 140px;
  height: 120px;
  border-radius: 5px 5px 0 0;
}
.content {
  width: 140px;
  height: 45px;
  background-color: #ffffff;
  box-shadow:
    rgb(50 50 93 / 25%) 0 13px 27px -5px,
    rgb(0 0 0 / 30%) 0 8px 16px -8px;
  .base-info {
    display: flex;
    flex: 1;
    img {
      margin-top: 5px;
      margin-left: 5px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    .info {
      /* flex布局中 flex: 1突出问题解决 文字不省略 */
      overflow: hidden;
      padding-top: 5px;
      padding-left: 10px;
      .name-title {
        .name {
          font-size: 12px;
          font-weight: 600;
          color: var(--third-color);
        }
      }
      .signature {
        margin-top: 2px;
        font-size: 12px;
        color: var(--second-color);
      }
    }
  }
}
</style>
