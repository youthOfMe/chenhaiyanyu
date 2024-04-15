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
      <van-tab title="全部">
        <div class="order-list">
          <OrderItem></OrderItem>
        </div>
      </van-tab>
      <van-tab title="待付款">交易中</van-tab>
      <van-tab title="待发货">收货中</van-tab>
      <van-tab title="待收货">已完成</van-tab>
      <van-tab title="退款/售后">已完成</van-tab>
      <van-tab title="待评价">已完成</van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useOrderStore } from '@/stores'
import OrderItem from './cpns/OrderItem.vue'

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

// 获取全部历史订单
const orderStore = useOrderStore()
orderStore.fetchHistoryOrderDataList(1, 5)
const { historyOrderDataList } = storeToRefs(orderStore)
</script>

<style lang="scss" scoped>
.order-list {
  padding: 10px 9px;
}
</style>
