<template>
  <div class="code-order">
    <van-nav-bar
      title="程序订单"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="back"
      @click-right="onClickRight"
    />
    <van-tabs v-model:active="active">
      <van-tab title="交流中">交流中</van-tab>
      <van-tab title="交易中">交易中</van-tab>
      <van-tab title="收货中">收货中</van-tab>
      <van-tab title="已完成">已完成</van-tab>
    </van-tabs>
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
