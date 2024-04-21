<template>
  <div class="create-contingent">
    <van-nav-bar
      title="创建队伍"
      left-text="返回"
      left-arrow
      @click-left="back"
      @click-right="goSearch"
    />
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

<style lang="scss" scoped></style>
