<template>
  <div class="code-order-card-v1">
    <div class="head">
      <img :src="getAssetURL('code-order/card-v1/front.png')" alt="" />
    </div>
    <div class="content">
      <div class="title">前端程序开发</div>
      <div class="price">价格: ￥188</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAssetURL } from '@/utils/LoadAssetsImg.js'
</script>

<style lang="scss" scoped>
.code-order-card-v1 {
  margin-bottom: 10px;
  background-color: #ffffff;
  box-shadow:
    rgb(0 0 0 / 12%) 0 1px 3px,
    rgb(0 0 0 / 24%) 0 1px 2px;
  .head {
    height: 200px;
    img {
      width: 100%;
      height: 200px;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100px;
    .price {
      padding-top: 5px;
      color: red;
    }
  }
}
</style>
