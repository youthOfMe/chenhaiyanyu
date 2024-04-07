<template>
  <div class="home">
    <div class="home-bg"></div>
    <TopBarMain></TopBarMain>
    <HomeNavCard></HomeNavCard>
    <div class="nav-content"></div>
    <!-- <div class="nav-scroll"></div> -->
    <!-- 热门建议 -->
    <div class="section hot-suggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div
          class="item"
          :style="{
            color: item.tagText?.color,
            background: item.tagText.background.color,
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { useHomeStore } from '@/stores'
import { storeToRefs } from 'pinia'
import HomeNavCard from './cpns/HomeNavCard.vue'

// 热门建议
const homeStore = useHomeStore()
// 发送网络请求
homeStore.fetchHotSuggestsData()
const { hotSuggests } = storeToRefs(homeStore)
</script>

<style lang="scss" scoped>
.home-bg {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 259px;
  background: url('@/assets/img/home/home-bg.jpg') no-repeat center center;
  filter: blur(10px);
}
.nav-content,
.nav-scroll {
  margin: 14px 9px 0;
  height: 81px;
  border-radius: 12px;
  background-color: #ffffff;
}
.section {
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 44px;
  color: #999999;
  flex-wrap: wrap;
  .start {
    display: flex;
    align-items: center;
    height: 44px;
    flex: 1;
  }
  .end {
    padding-left: 20px;
    min-width: 30%;
  }
  .date {
    display: flex;
    flex-direction: column;
    .tip {
      font-size: 12px;
      color: #999999;
    }
    .time {
      margin-top: 3px;
      font-size: 15px;
      font-weight: 500;
      color: #333333;
    }
  }
}
.hot-suggests {
  margin: 10px 0;
  height: auto;
  background-color: #ffffff;
  .item {
    margin: 4px;
    padding: 4px 8px;
    font-size: 12px;
    border-radius: 14px;
    line-height: 1;
  }
}
</style>
