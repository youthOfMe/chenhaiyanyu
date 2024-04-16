<template>
  <div class="notify-item">
    <div class="head">
      <img :src="getAssetURL('home/head-bg.jpg')" alt="" />
    </div>
    <div class="notify-info">
      <div class="title-time">
        <div class="title nowrap_ellipsis" v-if="type !== 2">辰海烟雨</div>
        <div class="title nowrap_ellipsis" v-if="type === 2">
          辰海烟雨(500人在线)
        </div>
        <van-button
          icon="plus"
          type="primary"
          v-if="type === 3"
          size="small"
          class="focus"
        >
          回关
        </van-button>
        <van-button
          icon="cross"
          type="primary"
          v-if="type === 4"
          size="small"
          class="focus"
        >
          取关
        </van-button>
        <van-button
          icon="cross"
          type="primary"
          v-if="type === 5"
          size="small"
          class="focus"
        >
          取消
        </van-button>
        <div class="time" v-if="type !== 1 && type < 3">昨天 21:35</div>
        <div class="status" v-if="type === 1">在线</div>
      </div>
      <div class="info-number">
        <div class="info notify nowrap_ellipsis" v-if="type === 0">
          我是付方亮, 喜欢痛扁赵宇轩
        </div>
        <div
          class="info signature nowrap_ellipsis"
          v-if="type === 1 || type >= 3"
        >
          爱意随风起 风止意难平
        </div>
        <div class="info notify nowrap_ellipsis" v-if="type === 2">
          李东亭: 我喜欢揍李云龙
        </div>
        <van-badge
          :content="5"
          class="number"
          v-if="type !== 1 && type < 3"
        ></van-badge>
        <SvgIcon name="common-right" v-if="type === 1"></SvgIcon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAssetURL } from '@/utils/LoadAssetsImg.js'

defineProps({
  type: {
    type: Number,
    default: () => 0,
  },
})
</script>

<style lang="scss" scoped>
.notify-item {
  display: flex;
  padding: 10px;
  background-color: #ffffff;
  .head {
    width: 60px;
    height: 60px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .notify-info {
    padding-left: 10px;
    flex: 1;
    .title-time {
      display: flex;
      align-items: center;
      .title {
        flex: 1;
        font-weight: normal;
      }
      .time {
        font-size: 12px;
        color: var(--second-color);
      }
      .status {
        font-size: 12px;
        color: var(--second-color);
      }
      .focus {
        position: relative;
        top: 5px;
      }
    }
    .info-number {
      display: flex;
      .info {
        flex: 1;
        font-size: 14px;
        color: var(--second-color);
      }
      .number {
        position: relative;
        right: 5px;
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
import type { Signature } from 'vant';import type SvgIconVue from
'../svg-icon/SvgIcon.vue';
