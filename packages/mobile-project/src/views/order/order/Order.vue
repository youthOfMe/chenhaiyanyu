<template>
  <div class="c1order">
    <van-nav-bar
      title="商品订单"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="back"
    />
    <TabControl :titles="names" @tab-item-click="tabSwitchClick"></TabControl>
    <div class="order-list" ref="orderListRef">
      <OrderItem
        v-for="orderInfo in historyOrderDataList"
        :orderInfo="orderInfo"
        :key="orderInfo.id"
      ></OrderItem>
      <div class="notify" v-if="isAllLoad">已经到底了~</div>
      <div class="notify" v-if="!isAllLoad">正在加载中...</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useOrderStore } from '@/stores'
import OrderItem from './cpns/OrderItem.vue'
import useScroll from '@/hooks/useScroll.js'
import { useCommonStore } from '@/stores'

// tab-control显示的数据
const names = [
  '全部',
  '待付款',
  '待处理',
  '已处理',
  '待收货',
  '已完成',
  '已取消',
  '退款',
]

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

// 监控页面区域
const active = ref(0)

// 获取全部历史订单
const orderStore = useOrderStore()
orderStore.fetchHistoryOrderDataList()
let { historyOrderDataList } = storeToRefs(orderStore)

// 加载特效
const commonStore = useCommonStore()
// 监听滚动
const isAllLoad = ref(false)
const orderListRef = ref()
const { isReachBottom, scrollTop } = useScroll(orderListRef)
watch(isReachBottom, (newValue) => {
  if (newValue) {
    if (isAllLoad.value) {
      return
    }
    commonStore.isLoading = true
    orderStore.page++
    orderStore.fetchHistoryOrderDataList().then((res) => {
      isReachBottom.value = false
      commonStore.isLoading = false
      if (res.data.records.length < 5) {
        isAllLoad.value = true
      }
    })
  }
})

// 监听tab-item点击
const tabSwitchClick = (index) => {
  orderStore.historyOrderDataList = []
  orderStore.page = 1
  if (index === 0) {
    orderStore.status = null
    // historyOrderDataList.value = orderStore.historyOrderDataList
  } else {
    orderStore.status = index
    // historyOrderDataList.value = orderStore.historyOrderDataList
  }
  orderStore.fetchHistoryOrderDataList()
}
</script>

<style lang="scss" scoped>
.order-list {
  position: relative;
  overflow-y: auto;
  padding: 10px 9px 0;
  height: calc(100vh - 60px - 45px);
  .notify {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
  }
}
</style>
