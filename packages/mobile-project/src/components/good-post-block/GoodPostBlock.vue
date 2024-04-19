<template>
  <div class="good-post-block">
    <img :src="item?.coverUrl || ''" alt="" class="big-img" />
    <div class="content">
      <div class="base-info">
        <img :src="item?.avatarUrl" @click="toPersonInfo" alt="" />
        <div class="info">
          <div class="name-title">
            <span class="name nowrap_ellipsis">{{ item?.name }}</span>
          </div>
          <div class="signature nowrap_ellipsis">{{ item?.title }}</div>
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
