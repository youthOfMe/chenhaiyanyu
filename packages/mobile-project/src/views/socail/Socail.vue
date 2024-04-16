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
    <Nav v-if="pageIndex === 0"></Nav>
    <div class="line"></div>
    <div class="notify-list">
      <SocailCardV1 v-for="i in 5" :key="i" :type="pageIndex"></SocailCardV1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCommonStore, useUserStore } from '@/stores'
import { SET_PAGE_STATUS } from '@/utils/PageStatus'
import Nav from './cpns/Nav.vue'

// tab-control显示的数据
const names = ['消息', '联系人', '群聊', '粉丝', '关注', '黑名单']

// 页面状态维护
const commonStore = useCommonStore()
const { socailPageIndex } = storeToRefs(commonStore)
const pageIndex = ref(socailPageIndex.value)
const tabSwitchClick = (index) => {
  pageIndex.value = index
  SET_PAGE_STATUS(index)
}
// onUnmounted(() => {
//   SET_PAGE_STATUS(0)
// })

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

// 获取联系人数据
const userStore = useUserStore()
userStore.fetchFrientList()
</script>

<style lang="scss" scoped>
.chat-list {
  .line {
    height: 1px;
    background-color: #eeeeee;
  }
}
</style>
