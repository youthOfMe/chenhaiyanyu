<template>
  <div class="shopping-card-v1">
    <div class="content">
      <img :src="item?.image" alt="" />
      <div class="info">
        <div class="name-specification">
          <div class="name nowrap_ellipsis">{{ item?.name || '辰海烟雨' }}</div>
          <div class="specification">{{ item?.dishFavor || '规格' }}</div>
        </div>
        <div class="price-number">
          <div class="price">￥{{ item?.amount || 88 }}</div>
          <div class="number">X{{ item?.number || 88 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAssetURL } from '@/utils/LoadAssetsImg.js'

defineProps({
  item: {
    type: Object,
    default: () => {},
  },
})
</script>

<style lang="scss" scoped>
.shopping-card-v1 {
  display: flex;
  margin-top: 5px;
  padding: 10px;
  background-color: #ffffff;
  .content {
    flex: 1;
    display: flex;
    margin-top: 10px;
    img {
      width: 100px;
      height: 100px;
      border-radius: 10px;
    }
    .info {
      display: flex;
      flex: 1;
      padding-left: 10px;
      .name-specification {
        flex: 1;
        .name {
          padding-bottom: 5px;
          font-size: 18px;
          font-weight: 600;
        }
        .specification {
          font-size: 16px;
          color: var(--second-color);
        }
      }
      .price-number {
        position: relative;
        .price {
          padding-bottom: 5px;
          font-size: 18px;
          font-weight: 600;
        }
        .number {
          position: absolute;
          right: 0;
          color: var(--second-color);
        }
      }
    }
  }
}
</style>
