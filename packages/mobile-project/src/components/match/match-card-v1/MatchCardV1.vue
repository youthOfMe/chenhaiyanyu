<template>
  <div class="match-card-v1">
    <div class="head-img">
      <img :src="userInfo.avatar" alt="" />
    </div>
    <div class="content">
      <div class="title-time">
        <div class="title nowrap_ellipsis">辰海烟雨</div>
        <div class="time">在线</div>
      </div>
      <div class="signature">希望赵宇轩一路长红</div>
      <div class="label">
        <van-tag plain type="primary">java</van-tag>
        <van-tag plain type="primary">python</van-tag>
      </div>
    </div>
    <div class="call">联系他</div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores'

// 获取用户数据
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
</script>

<style lang="scss" scoped>
.match-card-v1 {
  position: relative;
  display: flex;
  padding: 10px 9px;
  background-color: #ffffff;
  .head-img {
    width: 100px;
    height: 100px;
    img {
      width: 100px;
      height: 100px;
    }
  }
  .content {
    padding-left: 10px;
    flex: 1;
    .title-time {
      display: flex;
      align-items: center;
      height: 20px;
      flex: 1;
      .title {
        flex: 1;
        font-weight: normal;
      }
      .time {
        position: relative;
        top: 5px;
        font-size: 12px;
        color: var(--primary-color);
      }
      > div {
        padding: 0;
        height: 20px;
        line-height: 20px;
      }
    }
    .signature {
      margin-top: 5px;
      font-size: 12px;
      color: var(--second-color);
    }
    .label {
      margin-top: 5px;
      > span {
        margin-right: 5px;
      }
    }
  }
  .call {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px;
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
  }
}
</style>
