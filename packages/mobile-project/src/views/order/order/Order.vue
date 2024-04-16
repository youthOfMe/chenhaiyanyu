<template>
  <div class="c1order">
    <van-nav-bar
      title="商品订单"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="back"
    />
    <TabControl :titles="names"></TabControl>
    <div class="order-list">
      <OrderItem
        v-for="orderInfo in historyOrderDataList"
        :orderInfo="orderInfo"
        :key="orderInfo.id"
      ></OrderItem>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useOrderStore } from '@/stores'
import OrderItem from './cpns/OrderItem.vue'

// tab-control显示的数据
const names = ['全部', '待付款', '待发货', '待收货', '退款/售后', '已完成']

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

// 监控页面区域
const active = ref(0)

// 获取全部历史订单
const page = ref(1)
const pageSize = ref(5)
const orderStore = useOrderStore()
orderStore.fetchHistoryOrderDataList(page.value, pageSize.value)
const { historyOrderDataList } = storeToRefs(orderStore)

// 下拉刷新
// const refreshing = ref(false)
// const onRefresh = () => {
//   refreshing.value = false
// }
// // 触底加载
// const loading = ref(false)
// const onLoad = () => {
//   orderStore
//     .fetchHistoryOrderDataList(page.value++, pageSize.value)
//     .then((res) => {
//       if (!res.data.records.length) {
//         finished.value = true
//       }
//       loading.value = false
//     })
// }
const finished = ref(false)
</script>

<style lang="scss" scoped>
.order-list {
  position: relative;
  overflow-y: auto;
  padding: 10px 9px 20px;
  height: calc(100vh - 60px - 45px);
}
</style>
