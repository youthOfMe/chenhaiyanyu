<template>
  <div class="commodity-card-v2" @click="goDetail(info?.id)">
    <img :src="info?.image || ''" alt="" />
    <div class="info">
      <div class="info-title"></div>
      <div class="info">
        <div class="name nowrap_ellipsis">{{ info?.name || '' }}</div>
        <div class="commit">商品好评率 99%</div>
        <div class="sales">
          <div class="price">￥{{ info?.price }}</div>
          <div class="sales-info">券后价</div>
          <div class="saled">已售8888</div>
        </div>
        <div class="coupons">
          <van-tag color="red" plain>券 | 立减999</van-tag>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { getAssetURL } from '@/utils/LoadAssetsImg.js'

defineProps({
  commodity: {
    type: Object,
    default: () => {},
  },
  info: {
    type: Object,
    default: () => {},
  },
})

const router = useRouter()
const goDetail = (id) => {
  router.push(`/commodity/${id}`)
}
</script>

<style lang="scss" scoped>
.commodity-card-v2 {
  margin: 10px;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: rgb(0 0 0 / 24%) 0 3px 8px;
  img {
    width: 100%;
    height: 161px;
  }
}
.info {
  margin-top: 10px;
  .name {
    font-size: 16px;
    font-weight: 600;
    color: var(--third-color);
  }
  .commit {
    margin-top: 10px;
    font-size: 12px;
    color: #ff8c00;
  }
  .sales {
    display: flex;
    margin-top: 10px;
    line-height: 20px;
    vertical-align: bottom;
    .price {
      margin-right: 5px;
      font-size: 20px;
      color: red;
    }
    .sales-info {
      margin-right: 5px;
      font-size: 13px;
      color: red;
    }
    .saled {
      font-size: 12px;
      color: var(--second-color);
    }
  }
  .coupons {
    margin-top: 10px;
  }
}
</style>
