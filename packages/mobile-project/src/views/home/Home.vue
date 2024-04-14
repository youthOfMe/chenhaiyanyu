<template>
  <div class="home">
    <div class="home-bg"></div>
    <TopBarMain @click="showCehua"></TopBarMain>
    <HomeNavCard></HomeNavCard>
    <div class="nav-content"></div>
    <!-- <div class="nav-scroll"></div> -->
    <!-- 板块列表 -->
    <div class="list">
      <PostBlock></PostBlock>
      <PostBlock></PostBlock>
    </div>
    <div class="block"></div>
    <van-popup v-model:show="show" position="left" :style="{ padding: '64px' }">
      内容
    </van-popup>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useHomeStore } from '@/stores'
import { storeToRefs } from 'pinia'
import HomeNavCard from './cpns/HomeNavCard.vue'

// 热门建议
const homeStore = useHomeStore()
// 发送网络请求
// homeStore.fetchHotSuggestsData()
const { hotSuggests } = storeToRefs(homeStore)

// 侧滑栏
const show = ref(false)
const showCehua = () => {
  show.value = true
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  overflow-y: auto;
  height: calc(100vh - 50px);
}
.home-bg {
  position: absolute;
  top: 0;
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
  margin: 14px 9px 0;
  height: auto;
  border-radius: 12px;
  background-color: #ffffff;
  .item {
    margin: 4px;
    padding: 4px 8px;
    font-size: 12px;
    border-radius: 14px;
    line-height: 1;
  }
}
.list {
  margin: 14px 9px 0;
  border-radius: 12px;
}
.block {
  height: 20px;
}
</style>
