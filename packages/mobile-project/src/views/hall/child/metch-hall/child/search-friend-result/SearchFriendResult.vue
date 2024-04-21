<template>
  <div class="search-friend-result">
    <van-nav-bar
      title="伙伴列表"
      left-text="返回"
      left-arrow
      @click-left="back"
    ></van-nav-bar>
    <div class="content">
      <van-empty image="search" description="搜索结果为空" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}
</script>

<style lang="scss" scoped>
.content {
  overflow-y: auto;
  height: calc(100vh - 46px);
  background-color: #ffffff;
}
</style>
