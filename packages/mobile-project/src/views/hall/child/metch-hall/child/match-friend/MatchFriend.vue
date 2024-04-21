<template>
  <div class="match-friend">
    <van-nav-bar
      title="匹配搭子"
      left-text="返回"
      left-arrow
      @click-left="back"
      @click-right="goSearch"
    >
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <van-cell center title="心动模式">
      <template #right-icon>
        <van-switch v-model="isMatchMode" size="24" />
      </template>
    </van-cell>
    <div class="content">
      <MatchCardV1
        v-for="item in userList"
        :key="item.id"
        :item="item"
      ></MatchCardV1>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores'

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

// 跳转到搜索搭子页面
const goSearch = () => {
  router.push('/search/friend')
}

// 准备分页查询数据
const pageQueryDTO = ref({
  page: 1,
  pageSize: 10,
})
// 获取推荐搭子数据
const userStore = useUserStore()
const { userList } = storeToRefs(userStore)
userStore.fetchPageUserList(pageQueryDTO.value)

// 心动模式
const isMatchMode = ref(false)
// 进行心动匹配
watch(isMatchMode, (newValue) => {
  if (newValue) {
    userStore.fetchMatchUserList(10)
  } else {
    userStore.fetchPageUserList(pageQueryDTO.value)
  }
})
</script>

<style lang="scss" scoped>
.content {
  overflow-y: auto;
  padding-top: 5px;
  height: calc(100vh - 48px - 46px - 5px);
}
</style>
