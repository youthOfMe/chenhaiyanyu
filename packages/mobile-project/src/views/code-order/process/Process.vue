<template>
  <div class="process">
    <van-nav-bar
      title="流程监控"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="back"
    />
  </div>
  <div class="content">
    <van-steps :active="active">
      <van-step>交流中</van-step>
      <van-step>交易中</van-step>
      <van-step>收货中</van-step>
      <van-step>交易完成</van-step>
    </van-steps>
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
