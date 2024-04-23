<template>
  <div class="chat-message">
    <div class="head" v-if="person === 'ai'">
      <img :src="getAssetURL('home/head.jpg')" alt="" />
    </div>
    <div class="notify-info">
      <div class="title-time">
        <div class="title nowrap_ellipsis" v-if="person === 'ai'">智能AI</div>
        <div class="time">{{ item.time }}</div>
        <div
          class="title nowrap_ellipsis"
          style="text-align: end"
          v-if="person === 'me'"
        >
          {{ item.userInfo.name }}
        </div>
      </div>
      <div class="info-number" v-if="person === 'ai'">
        <div class="info notify">
          {{ item.message }}
        </div>
      </div>
      <div class="info-number" v-if="person === 'me'">
        <div class="info notify nowrap_ellipsis" style="text-align: end">
          {{ item.message }}
        </div>
      </div>
    </div>
    <div class="head" v-if="person === 'me'">
      <img :src="item.userInfo.avatar ?? ''" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { getAssetURL } from '@/utils/LoadAssetsImg.js'

defineProps({
  person: {
    type: String,
    default: () => 'me',
  },
  item: {
    type: Object,
    default: () => {},
  },
})
</script>

<style lang="scss" scoped>
.chat-message {
  display: flex;
  margin-top: 5px;
  padding-right: 5px;

  /* border-bottom: 1px solid #eeeeee; */
  .head {
    display: flex;
    justify-content: center;
    padding: 5px 10px;
    width: 50px;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
  .notify-info {
    padding-left: 10px;
    width: calc(100vw - 90px);
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
        /* display: flex; */
        word-wrap: break-word;
        word-break: break-all;
        overflow: hidden;

        /* flex: 1; */
        width: calc(100vw - 90px);
        flex-wrap: wrap;
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
