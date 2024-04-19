<template>
  <div class="shoppingCart">
    <van-nav-bar
      title="购物车"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="back"
    />
    <div class="list">
      <ShoppingCartV1
        v-for="item in shoppingCart"
        :key="item.id"
        :item="item"
      ></ShoppingCartV1>
    </div>
  </div>
  <CpPaySheet
    :show="show"
    :order-id="'123456'"
    :actual-payment="payMoney"
    :on-close="onClose"
    :pay-callback="'/payOrder'"
  ></CpPaySheet>
  <van-submit-bar
    :price="payMoney * 100"
    button-text="提交订单"
    @submit="onSubmit"
  >
    <van-checkbox v-model="checked">全选</van-checkbox>
  </van-submit-bar>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import {
  useShoppingCartStore,
  useOrderStore,
  useAddressBookStore,
} from '@/stores'
import ShoppingCartV1 from './cpns/ShoppingCartV1.vue'
import { showConfirmDialog } from 'vant'
// 确认框样式问题
import 'vant/es/dialog/style'

// 路由回退
const router = useRouter()
const back = () => {
  router.back()
}

// 获取默认地址数据
const addressBookStore = useAddressBookStore()
addressBookStore.fetchDefaultAddress()
const { addressDefaultInfo } = storeToRefs(addressBookStore)

// 获取购物车中的数据
const shoppingCartStore = useShoppingCartStore()
const { shoppingCart } = storeToRefs(shoppingCartStore)
shoppingCartStore.fecthShoppingCartList()

// 商品总金额
const allMoney = ref(0)
watch(shoppingCart, (newValue) => {
  allMoney.value = newValue.reduce((prev: any, cur: any) => {
    return cur.amount * cur.number + prev
  }, 0)
})
// 运费
const freight = 18
// 优惠券
const preferential = 0
// 最终价格
const payMoney = ref(0)
watch(allMoney, (newValue) => {
  payMoney.value = newValue + freight - preferential
})

// 提交订单
const orderId = ref(0)
const loading = ref(false)
const orderStore = useOrderStore()
// 测试阻塞函数
function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
const onSubmit = async () => {
  // 提交订单
  loading.value = true
  const orderSubmitData = {
    addressBookId: addressDefaultInfo.value.id,
    payMethod: 3,
    remark: '默认备注',
    estimatedDeliveryTime: '2024-04-15 23:42:00',
    deliveryStatus: 1,
    packAmount: freight,
    amount: allMoney.value,
    tablewareNumber: 0,
    tablewareStatus: 0,
  }
  orderStore.fetchSubmitOrder(orderSubmitData)
  loading.value = false
  // 展示橱窗
  show.value = true
}

// 显示提交订单
const show = ref(false)
const onClose = () => {
  return showConfirmDialog({
    title: '牛马提示',
    message: '是否确认取消呢',
    cancelButtonText: '狠心离开',
    confirmButtonText: '狠心支付',
  })
    .then(() => {
      return false
    })
    .catch(() => {
      // orderId.value = ''
      router.replace('/order')
      orderStore.orderData = {}
      show.value = false
      return true
    })
}
</script>

<style lang="scss" scoped>
.list {
  padding: 0;
}
</style>
