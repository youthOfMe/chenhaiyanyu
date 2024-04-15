<template>
  <div class="c1order">
    <van-nav-bar
      title="商品订单"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="back"
      @click-right="onClickRight"
    />
    <van-tabs v-model:active="active">
      <van-tab title="交流中">
        <div class="order-list">
          <!-- <OrderItem></OrderItem> -->
        </div>
      </van-tab>
      <van-tab title="交易中">交易中</van-tab>
      <van-tab title="收货中">收货中</van-tab>
      <van-tab title="已完成">已完成</van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import OrderItem from './cpns/OrderItem.vue'

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}
</script>

<style lang="scss" scoped>
.order-list {
  padding: 10px 9px;
}
</style>
