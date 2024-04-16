<template>
  <div class="chat-list">
    <van-nav-bar
      title="社交界面"
      left-text="返回"
      right-text="标为已读"
      left-arrow
      @click-left="back"
    />
    <TabControl :titles="names" @tab-item-click="tabSwitchClick"></TabControl>
    <van-search v-model="value" placeholder="请输入搜索关键词" shape="round" />
    <Nav></Nav>
    <div class="line"></div>
    <div class="notify-list">
      <div class="notify-item" v-for="i in 5" :key="i">
        <div class="head">
          <img :src="getAssetURL('home/head-bg.jpg')" alt="" />
        </div>
        <div class="notify-info">
          <div class="title-time">
            <div class="title nowrap_ellipsis">辰海烟雨</div>
            <div class="time">昨天 21:35</div>
          </div>
          <div class="info-number">
            <div class="info">我是付方亮, 喜欢痛扁赵宇轩</div>
            <van-badge :content="5" class="number"></van-badge>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import Nav from './cpns/Nav.vue'
import { getAssetURL } from '@/utils/LoadAssetsImg.js'

// tab-control显示的数据
const names = ['消息', '联系人', '群聊', '粉丝', '关注', '黑名单']

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}
</script>

<style lang="scss" scoped>
.chat-list {
  .line {
    height: 1px;
    background-color: #eeeeee;
  }
  .notify-list {
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
  }
}
</style>
